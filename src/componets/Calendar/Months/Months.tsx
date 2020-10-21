import React from 'react';
import dateFns from "date-fns";
import ru from 'date-fns/locale/ru';
import './Months.css';


interface MonthsProps {

}

interface MonthsState {
    currentMonth: Date,
    currentDay: Date,
}



class Months extends React.Component<MonthsProps, MonthsState> {
    private formatOptions: Object

    constructor(props: MonthsProps) {
        super(props)
        this.state = {
            currentMonth: new Date(),
            currentDay: new Date(),
        };
        this.formatOptions = { locale: ru, weekStartsOn: 1 };
        this.prevMonth = this.prevMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
    }

    public prevMonth(): void {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1),
        });
    }

    public nextMonth(): void {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1),
        });
    }

    public renderHeader(): React.ReactNode {
        const dateFormat = 'MMMM';
        return (
            <div className='header row'>
                <div className='col col-start'>
                    <img src='/arrow.png' className='icon prev' onClick={this.prevMonth} />
                </div>
                <div className='col col-center'>
                    <span>
                        {dateFns.format(this.state.currentMonth, dateFormat, this.formatOptions)}
                    </span>
                </div>
                <div className='col col-end'>
                    <img src='/arrow.png' className='icon' onClick={this.nextMonth} />
                </div>
            </div>
        );
    }

    public renderDaysWeek(): React.ReactNode {
        const dateFormat = 'dddd';
        const days = [];
        let startDate = dateFns.startOfWeek(this.state.currentMonth, this.formatOptions)
        for (let i = 0; i < 7; i++) {
            days.push(
                <div className='col col-center' key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat, this.formatOptions)}
                </div>
            )
        }
        return <div className='days row'>{days}</div>;
    }

    public renderCells(): React.ReactNode {
        const { currentMonth, currentDay } = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart, this.formatOptions);
        const endDate = dateFns.endOfWeek(monthEnd, this.formatOptions);

        const dateFormat = 'D';
        const rows = [];

        let days = [];
        let day = startDate;
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                let formattedDate = dateFns.format(day, dateFormat);
                const cellClass = !dateFns.isSameMonth(day, monthStart) ?
                    'disabled' :
                    dateFns.isSameDay(day, currentDay) ? 'selected' : ''

                days.push(
                    <div className={`col cell ${cellClass}`} >
                        <span className='day'>{formattedDate}</span>
                    </div>
                );
                day = dateFns.addDays(day, 1)
            }
            rows.push(
                <div className='row' >
                    {days}
                </div>
            )
            days = [];
        }
        console.log(rows)
        return <div className='body'>{rows}</div>;
    }

    public render(): React.ReactNode {
        return (
            <div className='months'>
                {this.renderHeader()}
                {this.renderDaysWeek()}
                {this.renderCells()}
            </div>
        );
    }
}

export default Months;

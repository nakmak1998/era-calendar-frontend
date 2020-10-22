import React from 'react';
import dateFns from 'date-fns';
import ru from 'date-fns/locale/ru';
import './Datetime.css';

interface ClockProps {

}

interface ClockState {
    date: Date,
}

class Clock extends React.Component<ClockProps, ClockState> {
    public timerID?: number;
    constructor(props: ClockProps) {
        super(props);
        this.state = { date: new Date() };
        this.timerID = -1
    }

    public componentDidMount(): void {
        this.timerID = window.setInterval(
            () => this.tick(),
            1000
        );
    }

    public componentWillUnmount(): void {
        clearInterval(this.timerID);
    }

    public tick(): void {
        this.setState({
            date: new Date()
        });
    }

    public render(): React.ReactNode {
        const formatDate = 'HH:mm'
        return (
            <div>
                <div>{dateFns.format(this.state.date, formatDate)}</div>
            </div>
        );
    }
}

interface DateProps {

}

interface DateState {
    currentDate: Date,
}

interface FormatDate {
    number: string,
    name: string,
}


class Datetime extends React.Component<DateProps, DateState> {
    public formatOptions: Object;
    public formatDate: FormatDate;
    constructor(props: DateProps) {
        super(props)
        this.state = {
            currentDate: new Date(),
        }
        this.formatOptions = { locale: ru, weekStartsOn: 1 };
        this.formatDate = { number: 'D', name: 'dddd' }
    }
    public render(): React.ReactNode {
        return (
            <div className='datetime'>
                <div className='date'>
                    {dateFns.format(this.state.currentDate, this.formatDate.number, this.formatOptions)}
                </div>
                <div className='name-day'>
                    {dateFns.format(this.state.currentDate, this.formatDate.name, this.formatOptions)}
                </div>
                <div className='time'><Clock /></div>
            </div>
        );
    }

}

export default Datetime;

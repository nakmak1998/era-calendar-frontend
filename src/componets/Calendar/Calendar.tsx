import React from 'react';
import "./Calendar.css";
import MainDateViver from './MainDateViewer';
import MainCalendar from './MainCalendar';


interface CalendarProps{

}

interface CalendarState{

}


class Calendar extends React.Component<CalendarProps,CalendarState>{
    constructor(props:CalendarProps){
        super(props);
    }
    public render():React.ReactNode{
        return <div className="calendarContainer">
            <MainDateViver />
        </div>;
    }
}

export default Calendar;
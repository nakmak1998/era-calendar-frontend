import React from 'react';
import "./Calendar.css";


interface CalendarProps{

}

interface CalendarState{

}


class Calendar extends React.Component<CalendarProps,CalendarState>{
    constructor(props:CalendarProps){
        super(props);
    }
    public render():React.ReactNode{
        return <div className="calendarContainer"></div>;
    }
}

export default Calendar;
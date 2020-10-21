import React from 'react';

import Months from './Months';
import Today from './Today';
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
        return <div className="calendarContainer">
            <Today />
            <Months />
        </div>;
    }
}

export default Calendar;
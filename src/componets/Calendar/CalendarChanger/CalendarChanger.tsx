import React from 'react';
import "./CalendarChanger.css";



enum ChangeType{
    MONTH,
    YEAR,
    YEAR_RANGE
}

interface CalendarChangerProps{

}

interface CalendarChangerState{

}

class CalendarChanger extends React.Component<CalendarChangerProps,CalendarChangerState>{
    constructor(props:CalendarChangerProps){
        super(props);
    }
    public render():React.ReactNode{
        return <div className="changer"></div>;
    }
}
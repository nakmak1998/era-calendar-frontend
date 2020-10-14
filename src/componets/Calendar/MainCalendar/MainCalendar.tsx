import React from 'react';
import "./MainCalendar.css"

interface MainCalendarProps{
    onDayClicked?:(day:number,year:number,month:number)=>void;
}

interface MainCalendarState{

}

class MainCalendar extends React.Component<MainCalendarProps,MainCalendarState>{
    constructor(props:MainCalendarProps){
        super(props);
    }
    public render():React.ReactNode{
        return <div className="calendar">
            <div className="changer">
                
            </div>
        </div>
    }
}

export default MainCalendar;
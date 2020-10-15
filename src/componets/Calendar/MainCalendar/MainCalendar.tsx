import React from 'react';
import "./MainCalendar.css"

enum ChangeType{
    MONTH,
    YEAR,
    YEAR_RANGE
}


interface MainCalendarProps{
    onDayClicked?:(day:number,year:number,month:number)=>void;
}

interface MainCalendarState{

}

class MainCalendar extends React.Component<MainCalendarProps,MainCalendarState>{
    constructor(props:MainCalendarProps){
        super(props);
    }
    private renderChanger():React.ReactNode{
      return  <div className="changer">
                <div className="arrow arrowBack">

                </div>
                <div className="changerTittle">

                </div>
                <div className="arrow arrowFront">

                </div>
            </div>
    }
    public render():React.ReactNode{
        return <div className="calendar">
            
        </div>
    }
}

export default MainCalendar;
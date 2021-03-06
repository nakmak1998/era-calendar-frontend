import React from 'react';
import "./MainDateViewer.css";

interface MainDateViewerProps{

}

interface MainDateViewerState{

}

class MainDateViewer extends React.Component<MainDateViewerProps,MainDateViewerState>{
    constructor(props:MainDateViewerProps){
        super(props);
    }
    public render():React.ReactNode{
        return <div className="dateViewer">
            <div className="weather">
                20 C
            </div>
            <div className="dateDisplay">
                06
            </div>
            <div className="weekDisplay">
                Вторник
            </div>
            <div className="timeDisplay">
                20 : 41
            </div>
        </div>;
    }
}

export default MainDateViewer;
import React from 'react';
import "./App.css";
import CubeGrid  from './CubeGrid';
import {BrowserRouter as Router} from 'react-router-dom';

interface AppProps{
    front?:React.ReactNode;
    back?:React.ReactNode;
    left?:React.ReactNode;
    right?:React.ReactNode;
    bottom?:React.ReactNode;
    top?:React.ReactNode;
}

interface AppState{

}


export default class App extends React.Component<AppProps,AppState>{
    constructor(props:AppProps){
        super(props);
    }
    public static defaultProps:AppProps={

    }
    public render():React.ReactNode{
        return <div className="appFrame">
            <CubeGrid>
                
            </CubeGrid>
            </div>

    }
}
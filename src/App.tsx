import React from 'react';
import "./App.css";
import CubeGrid  from './componets/CubeGrid';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Grid from './componets/MainGrid';
import Calendar from './componets/Calendar';
import { getFirstWeekDayMonth } from "./utils/date-utils";

interface AppProps{

}

interface AppState{

}


export default class App extends React.Component<AppProps,AppState>{
    constructor(props:AppProps){
        super(props);
    }
    public static defaultProps:AppProps={

    }
    public componentDidMount():void{
        console.log(getFirstWeekDayMonth(new Date()));
    }
    public render():React.ReactNode{
        return <div className="appFrame">
            <Router>
                <Switch>
                    <Route exact path="/cube"  render={()=><CubeGrid front={<Calendar/>}/>} />
                    <Route exact path="/" component={Calendar}/>
                </Switch>
            </Router>
            </div>

    }
}
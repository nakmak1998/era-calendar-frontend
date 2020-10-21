import React from 'react';
import "./App.css";
import CubeGrid  from './componets/CubeGrid';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Grid from './componets/MainGrid';
import Calendar from './componets/Calendar';
import Events from './componets/Events';
import Covid from './componets/Covid';

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
    }
    public render():React.ReactNode{
        return <div className="appFrame">
            <Router>
                <Switch>
                    <Route exact path="/cube"  render={()=><CubeGrid front={<Calendar/>} right={<Events/>} left={<Covid/>} />} />
                    <Route exact path="/" component={Covid}/>
                </Switch>
            </Router>
            </div>

    }
}
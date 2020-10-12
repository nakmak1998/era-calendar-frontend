import React from 'react';
import "./App.css";
import CubeGrid  from './componets/CubeGrid';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Grid from './componets/MainGrid';
import Calendar from './componets/Calendar';

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
    public render():React.ReactNode{
        return <div className="appFrame">
            <Router>
                <Switch>
                    <Route exact path="/cube"  component={CubeGrid} />
                    <Route exact path="/" component={Calendar}/>
                </Switch>
            </Router>
            </div>

    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";

const element:HTMLElement|null=document.getElementById("root");

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,element)
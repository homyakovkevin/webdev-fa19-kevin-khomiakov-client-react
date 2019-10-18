import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import WhiteBoard from "./containers/WhiteBoard";

function App() {
    return (
        <Router>
            <div>
                <Route path="/" exact component={WhiteBoard}/>
            </div>
        </Router>
    );
}

export default App;
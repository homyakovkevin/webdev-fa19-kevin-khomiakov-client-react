import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseList from "./components/CourseList";
import CourseEditor from "./components/CourseEditor";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

function App() {
    return (
        <Router>
            <h2>WhiteBoard</h2>
            <Switch>
                <Route exact path="/editor/:courseId" component={CourseEditor} />
                <Route exact path="/list" component={CourseList}>
                    <CourseList/>
                </Route>
                <CourseList/>
            </Switch>
        </Router>
    );
}

export default App;

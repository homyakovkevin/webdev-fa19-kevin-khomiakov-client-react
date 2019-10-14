import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseList from "./containers/CourseList";
import CourseEditor from "./containers/CourseEditor";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import WidgetListAssignment from './containers/WidgetListAssignment'

function App() {
    return (
        <Router>
            <h2>WhiteBoard</h2>
            <Switch>
                {/*<Route exact path="/editor/:courseId" component={CourseEditor} />*/}
                {/*<Route exact path="/list" component={CourseList}>*/}
                {/*    <CourseList/>*/}
                {/*</Route>*/}
                {/*<CourseList/>*/}
                <a href="/widgets">Widgets</a>
                <Route
                    exact={true}
                    path="/widgets"
                    component={WidgetListAssignment}/>
            </Switch>
        </Router>
    );
}

export default App;

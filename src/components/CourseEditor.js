import React from 'react'
import ModuleListContainer from "./ModuleListContainer";
import CourseService from "../services/CourseService";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import { FaTimes } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import LessonTabs from "./LessonTabs";

let courseService = CourseService.getInstance()

const CourseEditor = ({match}) =>
    <div>
        {/*<Link to='/'>List</Link>*/}
        <nav className="navbar navbar-dark navbar-expand-md shadow">
            <FaTimes/>
            <b id="title-nav" className="wbdv-course-title">
                Course Editor {match.params.courseId}
            </b>
            <div className="collapse navbar-collapse">
                <a className="nav-link wbdv-page-tab" href="#">Build</a>
                <a className="nav-link wbdv-page-tab" href="#" id="nav-active">Pages</a>
                <a className="nav-link wbdv-page-tab" href="#">Theme</a>
                <a className="nav-link wbdv-page-tab" href="#">Store</a>
                <a className="nav-link wbdv-page-tab" href="#">Apps</a>
                <a className="nav-link wbdv-page-tab" href="#">Apps</a>
                <a className="nav-link wbdv-page-tab" href="#"> Settings</a>
                <FaPlus/>
            </div>
        </nav>
        <div className="row">
            <div className="col-3">
                <ModuleListContainer course={courseService.findCourseById(match.params.courseId)}/>
                {/*<ModuleList course={courseService.findCourseById(match.params.courseId)}/>*/}
            </div>
            <div className="col-9">
                <LessonTabs lessons={courseService.findCourseById(match.params.courseId).modules[0].lessons}/>
            </div>
        </div>
    </div>

export default CourseEditor
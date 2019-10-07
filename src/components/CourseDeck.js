import React from 'react'
import CourseCard from "./CourseCard";
import CourseService from '../services/CourseService'
import { FaBars } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';

let courseService = CourseService.getInstance()

const CourseDeck = () =>
    <div class="container-fluid">
        <nav className="navbar navbar-expand-md shadow-sm row">
            <div className="col-2 col-sm-1 col-md-1">
                <FaBars/>
            </div>
            <div className="col-0 col-sm-3 col-md-3 collapse navbar-collapse">
                <a className="navbar-brand wbdv-label wbdv-course-manager">Course Manager</a>
            </div>
            <div className="col-8 col-sm-7 col-md-7">
                <input className="form-control wbdv-field wbdv-new-course" placeholder="New Course Title" type="text" />
            </div>
            <div className="col-2 col-sm-1 col-md-1">
                <FaPlusCircle/>
            </div>
        </nav>
    </div>

export default CourseDeck
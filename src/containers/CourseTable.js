import React from 'react'
import {Link} from "react-router-dom";
import CourseRow from "../components/CourseRow";
import {FaBars} from 'react-icons/fa';
import {FaPlusCircle} from 'react-icons/fa';
import {FaCaretDown} from "react-icons/fa";
import {FaGripHorizontal} from "react-icons/fa";
import {FaSortAlphaDown} from "react-icons/fa";
import '../styles/CourseTable.css'

export default class CourseTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark shadow-sm row bg-dark">
                    <div className="col-2 col-sm-1 col-md-1">
                        <button className="wbdv-field wbdv-hamburger">
                            <FaBars size={25}/>
                        </button>
                    </div>
                    <div className="col-0 col-sm-3 col-md-3 collapse navbar-collapse">
                        <a className="navbar-brand wbdv-label wbdv-course-manager">Course Manager</a>
                    </div>
                    <div className="col-8 col-sm-7 col-md-7">
                        <input className="form-control wbdv-field wbdv-new-course" placeholder="New Course Title"
                               type="text"/>
                    </div>
                    <div className="col-2 col-sm-1 col-md-1">
                        <button className="wbdv-button wbdv-add-course" onClick={() => this.props.createCourse(this.props.course)}>
                            <FaPlusCircle size={25}/>
                        </button>
                    </div>
                </nav>

                <div className="container">
                    <table className="table table-hover table-responsive">
                        <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col bdv-header wbdv-title">Title</th>
                            <th scope="col" className="hidden wbdv-header wbdv-owner">
                                Owned By
                                <button className="btn-title">
                                    <FaCaretDown/>
                                </button>
                            </th>
                            <th scope="col" className="hidden wbdv-header wbdv-last-modified">Last modified by me</th>
                            <th scope="col" className="hidden">
                                <Link to="/course-grid">
                                <button className="btn-title wbdv-button wbdv-grid-layout">
                                    <FaGripHorizontal/>
                                </button>
                                </Link>
                            </th>
                            <th scope="col" className="hidden">
                                <button className="btn-title wbdv-header wbdv-sort">
                                    <FaSortAlphaDown/>
                                </button>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="ml-5">
                        {this.props.courses.map((course) =>
                            <CourseRow selectCourse={this.props.selectCourse}
                                       deleteCourse={this.props.deleteCourse}
                                       course={course} key={course.id}/>
                        )}
                        </tbody>
                    </table>
                </div>
                <button className="btn-plus-right">
                    <FaPlusCircle size={35}/>
                </button>
            </div>
        )
    }
}
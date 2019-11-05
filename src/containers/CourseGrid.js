import React from "react";
import CourseCard from "../components/CourseCard";
import {Link} from "react-router-dom";
import {FaBars} from 'react-icons/fa';
import {FaPlusCircle} from 'react-icons/fa';
import {FaCaretDown} from "react-icons/fa";
import {FaSortAlphaDown} from "react-icons/fa";


export default class CourseGrid
    extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    titleChanged = (event) => {
        this.setState({
            title: event.target.value

        })
    };

    render() {
        return (
            <div className="container-fluid">
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
                               onChange={this.titleChanged} type="text"/>
                    </div>
                    <div className="col-2 col-sm-1 col-md-1">
                        <button className="wbdv-button wbdv-add-course" onClick={() => this.props.createCourse({
                            id: 0,
                            title: this.state.title,
                            widgets: []
                        })}>
                            <FaPlusCircle size={25}/>
                        </button>
                    </div>
                </nav>

                <div className="container">
                    <table className="tabler">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>
                                Owned By
                                <button className="btn-title">
                                    <FaCaretDown/>
                                </button>
                            </th>
                            <th className="hidden wbdv-header wbdv-last-modified">Last modified by me</th>
                            <th className="hidden">
                                <Link to="/course-table">
                                    <button className="btn-title wbdv-button wbdv-grid-layout">
                                        <FaBars/>
                                    </button>
                                </Link>
                            </th>
                            <th className="hidden">
                                <button className="btn-title wbdv-header wbdv-sort">
                                    <FaSortAlphaDown/>
                                </button>
                            </th>
                            <th>
                                &nbsp;
                            </th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr className="card-deck grid-container">
                            {this.props.courses.map((course, key) =>
                                <CourseCard course={course}
                                            selectCourse={this.props.selectCourse}
                                            deleteCourse={this.props.deleteCourse}
                                            updateCourse={this.props.updateCourse}
                                            key={key}/>)}
                        </tr>
                        </tbody>
                    </table>
                </div>
                <button className="btn float-right" onClick={() => this.props.createCourse({
                    id: 0,
                    title: "New Course",
                    widgets:[]
                })}>
                    <FaPlusCircle size={35}/>
                </button>
            </div>
        )
    }
}
import React from 'react'
import CourseService from '../services/CourseService'
import {FaBars} from 'react-icons/fa';
import {FaPlusCircle} from 'react-icons/fa';
import ListContainer from "../containers/ListContainer";

let courseService = CourseService.getInstance()

const courses = courseService.findAllCourses()

export default class CourseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newCourse: {
                id: "",
                title: "",
                modules: []
            },
            curView: ListContainer,
            courses: courseService.findAllCourses()
        };
    }

    titleChanged = (event) => {
        this.setState({
            newCourse: {
                id: (new Date()).getTime(),
                title: event.currentTarget.value,
                modules: []
            }
        })
    }

    createCourse = () => {
        courseService.createCourse(this.state.newCourse);
        this.setState(prevState => ({
            newCourse: {
                id: "",
                title: "",
                modules: []
            },
            curView: prevState.curView,
            courses: courseService.findAllCourses()
        }))
    }

    deleteCourse = (id) => {
        courseService.deleteCourse(id);
        this.setState(prevState => ({
            newCourse: prevState.newCourse,
            curView: prevState.curView,
            courses: courseService.findAllCourses()
        }))
    }

    switchView = (view) => {
        this.setState({
            curView: view
        })
    }


    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md shadow-sm row">
                    <div className="col-2 col-sm-1 col-md-1">
                        <button><FaBars/></button>
                    </div>
                    <div className="col-0 col-sm-3 col-md-3 collapse navbar-collapse">
                        <a className="navbar-brand wbdv-label wbdv-course-manager">Course Manager</a>
                    </div>
                    <div className="col-8 col-sm-7 col-md-7">
                        <input className="form-control wbdv-field wbdv-new-course"
                               value={this.state.newCourse.title}
                               onChange={this.titleChanged}
                               placeholder="New Course Title"
                               type="text"/>
                    </div>
                    <div className="col-2 col-sm-1 col-md-1">
                        <button onClick={this.createCourse}><FaPlusCircle/></button>
                    </div>
                </nav>
                <this.state.curView
                    courses={this.state.courses}
                    callback={this.switchView.bind(this)}
                    dCallback={this.deleteCourse.bind(this)}/>
            </div>
        )
    }
}


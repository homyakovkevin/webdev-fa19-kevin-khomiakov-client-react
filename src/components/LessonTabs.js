import React from 'react'
import LessonTab from "./LessonTab";
import "../styles/CourseEditor.css";
import {FaPlus} from "react-icons/fa";

export default class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: this.props.lessons
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.lessons !== this.props.lessons) {
            this.setState({
                lessons: this.props.lessons
            })
        }
    }

    render() {
        return (
            <ul className="nav nav-tabs bg-dark">
                {
                    this.state.lessons && this.state.lessons.map((lesson, key) =>
                        <LessonTab lesson={lesson} key={key}
                                   lessonSelected={this.props.lessonSelected}
                                   selectLesson={this.props.selectLesson}
                                   updateLesson={this.props.updateLesson}
                                   deleteLesson={this.props.deleteLesson}

                        />)
                }

                <li className="nav-item bg-dark">
                    <input
                        onChange={this.props.lessonTitleChanged}
                        placeholder="New Lesson"
                        className="form-control"
                        id="add-lesson-input"/>
                    <button onClick={() => this.props.createLesson()} className="btn wbdv-new float-right">
                        <FaPlus/>
                    </button>
                </li>
            </ul>
        )
    }
}
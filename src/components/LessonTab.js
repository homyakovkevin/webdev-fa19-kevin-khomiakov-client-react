import React from 'react'
import {FaPencilAlt} from "react-icons/fa";
import {FaTimes} from "react-icons/fa";
import "../styles/CourseEditor.css"
import {FaCheck} from "react-icons/fa";

export default class LessonTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            title: ""
        };
    }

    toggleInput = () => {
        this.setState({isHidden: !this.state.isHidden})
    }

    titleChanged = (event) => {
        this.setState({title: event.target.value})
    }

    render() {
        return (
            <li className="nav-item wbdv-new bg-dark" onClick={() => this.props.selectLesson(this.props.lesson)}
                className={this.props.lesson === this.props.lessonSelected ? "nav-link active bg-dark wbdv-new" : "nav-link bg-dark wbdv-new"}>
                <a className="bg-dark">{this.props.lesson.title}</a>
                <button className="btn wbdv-new" onClick={() => this.toggleInput()}>
                    <FaPencilAlt/>
                </button>
                <button className="btn wbdv-new" onClick={() => this.props.deleteLesson(this.props.lesson)}>
                    <FaTimes/>
                </button>
                {
                    this.state.isHidden ? "" :
                        <div>
                            <input type="text" onChange={this.titleChanged}
                                   placeholder={this.props.lesson.title}
                                   defaultValue={this.props.lesson.title}/>
                            <button onClick={() => {
                                this.props.updateLesson(this.props.lessonSelected, this.state.title);
                                this.toggleInput()
                            }}
                                    className="btn wbdv-new">
                                <FaCheck/>
                            </button>
                        </div>
                }
            </li>
        )
    }
}

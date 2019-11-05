import React from 'react'
import {Link} from 'react-router-dom'
import {FaEdit, FaTimes} from 'react-icons/fa';
import {FaFileAlt} from 'react-icons/fa';
import "../styles/CourseTable.css"
import {FaCheck} from "react-icons/fa";

export default class CourseRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            title: this.props.course.title
        }
    }

    update = () => {
        this.setState({
            editing: !this.state.editing
        });
        this.props.updateCourse(this.props.course.id, {
            ...this.props.course,
            title: this.state.title
        });
    };

    render() {
        return (
            <tr>
                <td><FaFileAlt/></td>
                <td>
                    <Link to={`/course-editor/${this.props.course.id}`}><i
                        onClick={() => this.props.selectCourse(this.props.course)}>{this.props.course.title}
                    </i></Link></td>
                <td>me</td>
                <td>6:54PM</td>
                <td></td>
                <td></td>

                {
                    !this.state.editing&&
                    <td>
                        <button className={"btn"}
                                onClick={() => this.setState({
                                    editing: !this.state.editing
                                })}><FaEdit/></button>
                    </td>
                }
                {
                    this.state.editing &&
                    <td className={"d-flex"}>
                        <input className={"form-control"}
                               placeholder={"New Title"}
                               value={this.state.title || ""}
                               onChange={(event) => this.setState({title: event.target.value})}/>
                        <button className={"btn"}
                                onClick={() => {
                                    this.update()
                                }}><FaCheck/></button>
                    </td>
                }
                <td>
                    <button className="wbdv-delete" onClick={() => this.props.deleteCourse(this.props.course.id)}>
                        <FaTimes/></button>
                </td>
            </tr>
        )
    }
}

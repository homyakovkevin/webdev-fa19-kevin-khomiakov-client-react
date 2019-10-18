import React from 'react'
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa';
import {FaFileAlt} from 'react-icons/fa';
import "../styles/CourseTable.css"

export default class CourseRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

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
                <td>
                    <button className="wbdv-delete" onClick={() => this.props.deleteCourse(this.props.course.id)}>
                        <FaTimes/></button>
                </td>
            </tr>
        )
    }
}

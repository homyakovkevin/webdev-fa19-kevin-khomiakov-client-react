import React from 'react'
import {Link} from 'react-router-dom'
import {FaFileAlt} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';

const CourseRow = ({course, callback}) =>
    <tr>
        <td scope="row">
            <FaFileAlt/>
        </td>
        <td>
            {course &&
            <Link to={`/editor/${course.id}`}>
                {course.title}
            </Link>
            }
        </td>
        <td scope="row">
        </td>
        <td scope="row">
        </td>
        <td scope="row">
        </td>
        <td scope="row">
            <button onClick={callback.bind(this, course.id)}>
                <FaTimes/></button>
        </td>
    </tr>

export default CourseRow
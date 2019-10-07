import React from 'react'
import {Link} from 'react-router-dom'
import {FaTrashAlt} from 'react-icons/fa';
import {FaEdit} from 'react-icons/fa';

const CourseCard = ({course, callback}) =>
    <div className="card">
        <img className="card-img-top"
             src="https://picsum.photos/300/200"/>
        <div className="card-body">
            <h5 className="card-title">
                <Link to={`/course/${course.id}`}>
                    {course.title}
                </Link>
            </h5>
            <p className="card-text">Card text.</p>
            <button class="float-left">
                <FaEdit/>
            </button>
            <button className="float-right" onClick={callback.bind(this, course.id)}>
                <FaTrashAlt/>
            </button>
        </div>
    </div>

export default CourseCard;
import React from 'react'
import {Link} from 'react-router-dom'
import CourseRow from "./CourseRow";
import { FaCaretDown } from 'react-icons/fa';
import { FaGripHorizontal } from 'react-icons/fa';
import { FaSortAlphaDown } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';
import CourseService from "../services/CourseService";
import ListContainer from "./ListContainer";
import CourseCard from "./CourseCard";

const CardContainer = ({courses, callback}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col bdv-header wbdv-title">Title</th>
                <th scope="col" className="hidden wbdv-header wbdv-owner">
                    Owned By
                    <FaCaretDown/>
                </th>
                <th scope="col" className="hidden wbdv-header wbdv-last-modified">Last modified by me</th>
                <th scope="col" className="hidden">
                    <button onClick={callback.bind(this, ListContainer)}>
                        <FaGripHorizontal/></button>
                </th>
                <th scope="col" className="hidden">
                    <FaSortAlphaDown/>
                </th>
            </tr>
            </thead>
            <div className="card-group">
            {
                courses.map(course =>
                        <CourseCard
                            // key={course.id}
                            course={course}
                            // title={course.title}
                        />
                    // seats={course.seats}/>
                )
            }
            </div>
        </table>
    )
}

export default CardContainer;
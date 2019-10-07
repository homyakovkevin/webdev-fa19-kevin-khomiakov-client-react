import React from 'react'
import { FaCaretDown } from 'react-icons/fa';
import { FaGripHorizontal } from 'react-icons/fa';
import { FaSortAlphaDown } from 'react-icons/fa';
import ListContainer from "./ListContainer";
import CourseCard from "../components/CourseCard";

const CardContainer = ({courses, callback, dCallback}) => {
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
                        <CourseCard course={course} callback={dCallback}/>
                )
            }
            </div>
        </table>
    )
}

export default CardContainer;
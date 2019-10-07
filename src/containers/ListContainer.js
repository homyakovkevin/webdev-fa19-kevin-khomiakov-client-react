import React from 'react'
import CourseRow from "../components/CourseRow";
import {FaCaretDown} from 'react-icons/fa';
import {FaGripHorizontal} from 'react-icons/fa';
import {FaSortAlphaDown} from 'react-icons/fa';
import CardContainer from "./CardContainer";

const ListContainer = ({courses, callback, dCallback}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col bdv-header wbdv-title">Title</th>
                <th scope="col" className="hidden wbdv-header wbdv-owner">
                    Owned By
                    <button><FaCaretDown/></button>
                </th>
                <th scope="col" className="hidden wbdv-header wbdv-last-modified">Last modified by me</th>
                <th scope="col" className="hidden">
                    <button onClick={callback.bind(this, CardContainer)}>
                        <FaGripHorizontal/></button>
                </th>
                <th scope="col" className="hidden">
                    <button><FaSortAlphaDown/></button>
                </th>
            </tr>
            </thead>
            <tbody className="table-body">
            {
                courses.map(course => <CourseRow course={course} callback={dCallback}/>)
            }
            </tbody>
        </table>
    )
}

export default ListContainer;
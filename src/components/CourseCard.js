import React from 'react'
import {Link} from "react-router-dom";
import {FaTrashAlt} from 'react-icons/fa';
import {FaEdit} from 'react-icons/fa';
import "../styles/CourseTable.css"

export default class CourseCard
    extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="card">
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">
                        <Link to={`/course/${this.props.course.id}`}>
                            {this.props.course.title}
                        </Link>
                    </h5>
                    <p className="card-text">{this.props.course.id}</p>
                    <button className="float-left btn wbdv-delete">
                        <FaEdit/>
                    </button>
                    <button className="float-right btn wbdv-delete" onClick={() => this.props.deleteCourse(this.props.course.id)}>
                        <FaTrashAlt/>
                    </button>
                </div>
            </div>
        )
    }

}
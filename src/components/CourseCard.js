import React from 'react'
import {Link} from "react-router-dom";
import {FaTrashAlt} from 'react-icons/fa';
import {FaEdit} from 'react-icons/fa';
import "../styles/CourseTable.css"
import {FaCheck} from "react-icons/fa";

export default class CourseCard
    extends React.Component {

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
                    {
                        !this.state.editing &&

                        <button className={"btn"}
                                onClick={() => this.setState({
                                    editing: !this.state.editing
                                })}><FaEdit/></button>
                    }
                    {
                        this.state.editing &&
                        <div className={"d-flex"}>
                            <input className={"form-control"}
                                   placeholder={"New Title"}
                                   value={this.state.title || ""}
                                   onChange={(event) => this.setState({title: event.target.value})}/>
                            <button className={"btn"}
                                    onClick={() => {
                                        this.update()
                                    }}><FaCheck/>
                            </button>
                        </div>
                    }

                    <button onClick={() => this.props.deleteCourse(this.props.course.id)}
                            className="btn float-right"><FaTrashAlt/>
                    </button>
                </div>
            </div>
        )
    }

}
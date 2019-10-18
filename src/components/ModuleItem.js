import React from 'react'
import {FaTimes} from "react-icons/fa";
import {FaPencilAlt} from "react-icons/fa";
import {FaCheck} from "react-icons/fa";
import "../styles/CourseEditor.css"

export default class ModuleItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            title: ""
        };
    }

    toggleInput = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    titleChanged = (event) => {
        this.setState({
            title: event.target.value

        })
    }

    render() {
        return (
            <li onClick={() => this.props.selectModule(this.props.module)}
                className={this.props.module === this.props.selectedModule ? "list-group-item active bg-secondary wbdv-new" : "list-group-item wbdv-new bg-dark"}>
                <a className="wbdv-new">{this.props.module.title}</a>
                <button className="btn float-right wbdv-new" onClick={() => this.props.deleteModule(this.props.module.id)}>
                    <FaTimes/>
                </button>
                <button className="btn float-right wbdv-new" onClick={() => this.toggleInput()}>
                    <FaPencilAlt/>
                </button>
                {
                    this.state.isHidden ? "" :
                        <div>
                            <input type="text" onChange={this.titleChanged} placeholder={this.props.module.title}
                                   defaultValue={this.props.module.title}/>
                            <button onClick={() => {
                                this.props.updateModule(this.props.selectedModule, this.state.title);
                                this.toggleInput()
                            }}
                                    className="btn float-right">
                                <FaCheck/>
                            </button>
                        </div>
                }
            </li>

        )
    }
}


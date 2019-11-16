import React from 'react'
import ModuleItem from './ModuleItem'
import {FaTimes} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";
import "../styles/CourseEditor.css"

export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modules: this.props.modules
        };
    }

    renderListOfModules() {
        let modules = this.state.modules
            .map(function (module) {
                return <ModuleItem
                    title={module.title} key={module.id}/>
            });
        return modules;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.modules !== this.props.modules) {
            this.setState({
                modules: this.props.modules
            })
        }
    }

    render() {
        return (
            <div className="wbdv-modules">
                <ul className="list-group">
                    <li className="list-group-item">
                        <input
                            onChange={this.props.moduleTitleChanged}
                            placeholder="New Module"
                            className="form-control"
                            id="add-module-input"/>
                        <button onClick={() => this.props.createModule(this.props.course.id,
                            {
                                title: this.props.module.title ? this.props.module.title : "New Module",
                            }
                        )} className="btn float-right wbdv-new"><FaPlus/>
                        </button>
                    </li>
                    {
                        this.state.modules && this.state.modules.map((module, key) =>
                            <ModuleItem
                                deleteModule={this.props.deleteModule}
                                selectModule={this.props.selectModule}
                                selectedModule={this.props.selectedModule}
                                module={module}
                                updateModule={this.props.updateModule}
                                key={key}/>
                        )
                    }

                </ul>
            </div>
        )
    }


}
import React from 'react'
import {FaPencilAlt} from "react-icons/fa";
import {FaTimes} from "react-icons/fa";
import {FaCheck} from "react-icons/fa";
import "../styles/CourseEditor.css"

export default class TopicItem extends React.Component {
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
            }
        )
    }

    render() {
        return (
            <li className="nav-item mr-3 wbdv-page-tab" onClick={() => this.props.selectTopic(this.props.topic)}
                className={this.props.topic === this.props.selectedTopic ? "nav-link active bg-secondary wbdv-page-tab" : " wbdv-page-tab nav-link bg-dark"}>
                <a className="wbdv-page-tab">{this.props.topic.title}</a>

                <button className="btn ml-3 wbdv-new" onClick={() => this.toggleInput()}>
                    <FaPencilAlt/>
                </button>

                <button className="btn ml-3 wbdv-new" onClick={() => this.props.deleteTopic(this.props.topic)}>
                    <FaTimes/>
                </button>

                {
                    this.state.isHidden ? "" :
                        <div><input type="text" onChange={this.titleChanged} placeholder={this.props.topic.title}
                                    defaultValue={this.props.topic.title}/>
                            <button onClick={() => {
                                this.props.updateTopic(this.props.selectedTopic, this.state.title);
                                this.toggleInput()
                            }}
                                    className="btn wbdv-new">
                                <FaCheck/>
                            </button>
                        </div>


                }
            </li>
        )
    }
}

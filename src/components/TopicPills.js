import React from 'react'
import TopicItem from "./TopicItem";
import "../styles/CourseEditor.css"
import {FaPlus} from "react-icons/fa";

export default class TopicPills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: this.props.topics,
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.topics !== this.props.topics) {
            this.setState({
                topics: this.props.topics
            })
        }
    }

    render() {
        return (
            <div>
                <ul className="nav nav-pills pt-2">
                    {
                        this.state.topics && this.state.topics.map((topic, key) =>
                            <TopicItem topic={topic} key={key}
                                       selectedTopic={this.props.selectedTopic}
                                       selectTopic={this.props.selectTopic}
                                       updateTopic={this.props.updateTopic}
                                       titleChanged={this.titleChanged}
                                       deleteTopic={this.props.deleteTopic}
                            />)

                    }

                    <li className="nav-item ml-3">
                        <input
                            onChange={this.props.topicTitleChanged}
                            placeholder="New topic"
                            className="form-control"
                            id="add-topic-input"/>
                        <button onClick={() => this.props.createTopic()}
                                className="btn wbdv-new float-right">
                            <FaPlus/>
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}


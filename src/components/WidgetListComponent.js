import React from 'react'
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import ListWidget from "./widgets/ListWidget";
import ImageWidget from "./widgets/ImageWidget";
import LinkWidget from "./widgets/LinkWidget";
import "../styles/CourseEditor.css"
import {FaPlus} from "react-icons/fa";

class WidgetListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.props.findWidgets();
    }

    state = {
        IsPreview: false
    };

    togglePreview = () =>
        this.setState({
            IsPreview: !this.state.IsPreview
        });


    render() {
        return (
            <div>

                <div className="row mb-sm-3">
                    <button className="btn btn-success btn-sm ml-sm-auto mr-sm-2"
                            id="moduleSaveBtn"
                            type="submit">Save
                    </button>
                    <label className="mr-sm-2"><b>Preview</b></label>
                    <div className="custom-control custom-switch col-sm-2">
                        <input className="custom-control-input"
                               id="customSwitch"
                               type="checkbox" onClick={this.togglePreview}/>
                        <label className="custom-control-label"
                               htmlFor="customSwitch"/>
                    </div>
                </div>


                <button className="btn btn-danger floating" onClick={() => this.props.createWidget(this.props.topicId, {
                    type: "HEADING",
                    id: 0,
                    name: "New Widget",
                    text: "",
                    size: "h1"
                })}>
                    <i className="fa fa-plus" style={{color: "white"}}/>
                </button>

                <ul>
                    {


                        this.props.widgets.map((widget, key) => {
                            if (widget && widget.type === "HEADING") {
                                return <HeadingWidget
                                    key={key}
                                    widgets={this.props.widgets}
                                    index={this.props.widgets.indexOf(widget)}
                                    updateWidget={this.props.updateWidget}
                                    widget={widget}
                                    deleteWidget={this.props.deleteWidget}
                                    topicId={this.props.topicId}
                                    findWidgets={this.props.findWidgets}
                                    moveWidgetUp={this.props.moveWidgetUp}
                                    moveWidgetDown={this.props.moveWidgetDown}
                                    IsPreview={this.state.IsPreview}
                                />
                            } else if (widget && widget.type === "PARAGRAPH") {
                                return <ParagraphWidget
                                    key={key}
                                    widgets={this.props.widgets}
                                    index={this.props.widgets.indexOf(widget)}
                                    updateWidget={this.props.updateWidget}
                                    widget={widget}
                                    deleteWidget={this.props.deleteWidget}
                                    topicId={this.props.topicId}
                                    findWidgets={this.props.findWidgets}
                                    moveWidgetUp={this.props.moveWidgetUp}
                                    moveWidgetDown={this.props.moveWidgetDown}
                                    // update_heading_size={update_heading_size}
                                    IsPreview={this.state.IsPreview}/>
                            } else if (widget && widget.type === "LIST") {
                                return <ListWidget
                                    key={key}
                                    widgets={this.props.widgets}
                                    index={this.props.widgets.indexOf(widget)}
                                    updateWidget={this.props.updateWidget}
                                    widget={widget}
                                    deleteWidget={this.props.deleteWidget}
                                    topicId={this.props.topicId}
                                    findWidgets={this.props.findWidgets}
                                    moveWidgetUp={this.props.moveWidgetUp}
                                    moveWidgetDown={this.props.moveWidgetDown}
                                    IsPreview={this.state.IsPreview}/>
                            } else if (widget && widget.type === "IMAGE") {
                                return <ImageWidget
                                    key={key}
                                    widgets={this.props.widgets}
                                    index={this.props.widgets.indexOf(widget)}
                                    updateWidget={this.props.updateWidget}
                                    widget={widget}
                                    deleteWidget={this.props.deleteWidget}
                                    topicId={this.props.topicId}
                                    findWidgets={this.props.findWidgets}
                                    moveWidgetUp={this.props.moveWidgetUp}
                                    moveWidgetDown={this.props.moveWidgetDown}
                                    IsPreview={this.state.IsPreview}/>
                            } else if (widget && widget.type === "LINK") {
                                return <LinkWidget index={this.props.widgets.indexOf(widget)}
                                                   key={key}
                                                   widgets={this.props.widgets}
                                                   updateWidget={this.props.updateWidget}
                                                   widget={widget}
                                                   deleteWidget={this.props.deleteWidget}
                                                   topicId={this.props.topicId}
                                                   findWidgets={this.props.findWidgets}
                                                   moveWidgetUp={this.props.moveWidgetUp}
                                                   moveWidgetDown={this.props.moveWidgetDown}
                                                   IsPreview={this.state.IsPreview}/>
                            }
                        })}


                </ul>
            </div>
        )
    }
}

export default WidgetListComponent




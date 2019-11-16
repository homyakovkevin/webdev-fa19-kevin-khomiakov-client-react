import React from 'react'
import {FaArrowUp} from "react-icons/fa";
import {FaArrowDown} from "react-icons/fa";
import {FaTimes} from "react-icons/fa";
import {HEADING, IMAGE, LINK, LIST, PARAGRAPH} from "../services/widgetsAsConst";

const WidgetButtons = ({
                           index, widgets, moveWidgetDown, moveWidgetUp, widget, deleteWidget,
                           updateWidget, topicId
                       }) =>
    <div className="d-flex justify-content-around">
        {
            (index !== 0) &&
            <button className={"btn btn-xs btn-warning mr-1"} onClick={() => moveWidgetUp(widgets, widget.id, topicId)}>
                <FaArrowUp/>
            </button>
        }
        {
            (index !== widgets.length - 1) &&
            <button className="btn btn-xs btn-warning mr-1" onClick={() => moveWidgetDown(widgets, widget.id, topicId)}>
                <FaArrowDown/>
            </button>}
        <select className="form-control"
                id="type"
                defaultValue={widget.type}
                onChange={(event) => updateWidget(widget.id, {...widget, type: event.target.value})}>
            <option value={HEADING}>Heading</option>
            <option value={PARAGRAPH}>Paragraph</option>
            <option value={LIST}>List</option>
            <option value={IMAGE}>Image</option>
            <option value={LINK}>Link</option>
        </select>
        <button className="btn btn-xs btn-danger ml-1"
                onClick={() => deleteWidget(widget.id)}>
            <FaTimes/>
        </button>
    </div>

export default WidgetButtons
import React from 'react'
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import ListWidget from "./widgets/ListWidget";
import ImageWidget from "./widgets/ImageWidget";
import LinkWidget from "./widgets/LinkWidget";
import "../styles/CourseEditor.css"
import {FaPlus} from "react-icons/fa";

const WidgetListComponent = ({
                                 widgets, Previewed, togglePreview, topicId, findWidgets, changeWidgetType,
                                 changeHeadSize, changeWidgetText, deleteWidget, changeWidgetName, createWidget,
                                 updateWidget, moveWidgetUp, moveWidgetDown, changeListContents, changeListType,
                                 changeImageSource, changeWidgetLink, changeWidgetTitle,
                             }) =>

    <div>
        <div className="row mb-sm-3">
            <button className="btn btn-success btn-sm ml-sm-auto mr-sm-2"
                    id="moduleSaveBtn"
                    type="submit">Save
            </button>
            <label className="mr-sm-2">
                <b>Preview</b>
            </label>
            <div className="custom-control custom-switch col-sm-2">
                <input className="custom-control-input"
                       id="customSwitch"
                       type="checkbox" onClick={togglePreview}/>
                <label className="custom-control-label"
                       htmlFor="customSwitch"/>
            </div>
        </div>

        <button className="btn btn-danger" onClick={createWidget}>
            <FaPlus/>
        </button>

        <ul>
            {
                widgets.map((widget, key) => {
                    if (widget && widget.type === "HEADING") {
                        return <HeadingWidget
                            key={key}
                            widgets={widgets}
                            index={widgets.indexOf(widget)}
                            updateWidget={updateWidget}
                            widget={widget}
                            deleteWidget={deleteWidget}
                            topicId={topicId}
                            findWidgets={findWidgets}
                            moveWidgetUp={moveWidgetUp}
                            moveWidgetDown={moveWidgetDown}
                            changeWidgetType={changeWidgetType}
                            changeWidgetText={changeWidgetText}
                            changeWidgetName={changeWidgetName}
                            changeHeadSize={changeHeadSize}
                            Previewed={Previewed}
                        />
                    } else if (widget && widget.type === "PARAGRAPH") {
                        return <ParagraphWidget
                            key={key}
                            widgets={widgets}
                            index={widgets.indexOf(widget)}
                            updateWidget={updateWidget}
                            widget={widget}
                            deleteWidget={deleteWidget}
                            topicId={topicId}
                            findWidgets={findWidgets}
                            moveWidgetUp={moveWidgetUp}
                            moveWidgetDown={moveWidgetDown}
                            changeWidgetType={changeWidgetType}
                            changeWidgetText={changeWidgetText}
                            changeWidgetName={changeWidgetName}
                            Previewed={Previewed}/>
                    } else if (widget && widget.type === "LIST") {
                        return <ListWidget
                            key={key}
                            widgets={widgets}
                            index={widgets.indexOf(widget)}
                            updateWidget={updateWidget}
                            widget={widget}
                            deleteWidget={deleteWidget}
                            topicId={topicId}
                            findWidgets={findWidgets}
                            moveWidgetUp={moveWidgetUp}
                            moveWidgetDown={moveWidgetDown}
                            changeWidgetType={changeWidgetType}
                            changeWidgetName={changeWidgetName}
                            changeListContents={changeListContents}
                            changeListType={changeListType}
                            Previewed={Previewed}/>
                    } else if (widget && widget.type === "IMAGE") {
                        return <ImageWidget
                            key={key}
                            widgets={widgets}
                            index={widgets.indexOf(widget)}
                            updateWidget={updateWidget}
                            widget={widget}
                            deleteWidget={deleteWidget}
                            topicId={topicId}
                            findWidgets={findWidgets}
                            moveWidgetUp={moveWidgetUp}
                            moveWidgetDown={moveWidgetDown}
                            changeWidgetType={changeWidgetType}
                            changeWidgetName={changeWidgetName}
                            changeWidgetLink={changeWidgetLink}
                            changeWidgetTitle={changeWidgetTitle}
                            Previewed={Previewed}/>
                    } else if (widget && widget.type === "LINK") {
                        return <LinkWidget
                            key={key}
                            widgets={widgets}
                            index={widgets.indexOf(widget)}
                            updateWidget={updateWidget}
                            widget={widget}
                            deleteWidget={deleteWidget}
                            topicId={topicId}
                            findWidgets={findWidgets}
                            moveWidgetUp={moveWidgetUp}
                            moveWidgetDown={moveWidgetDown}
                            changeWidgetType={changeWidgetType}
                            changeWidgetName={changeWidgetName}
                            changeImageSource={changeImageSource}
                            Previewed={Previewed}/>
                    }
                })}
        </ul>
    </div>

export default WidgetListComponent




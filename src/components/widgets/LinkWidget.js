import WidgetButtons from "../WidgetButtons";
import React from "react";

const LinkWidget = ({
                        index, widget, widgets, deleteWidget, moveWidgetUp, changeWidgetType, moveWidgetDown,
                        Previewed, changeWidgetLink, changeWidgetTitle, changeWidgetName
                    }) =>

    <div className="mb-5 card p-1">
        {
            !Previewed &&
            <div>
                <div className="form-group row ml-sm-2 col-sm-12">
                    <h4 className="mr-auto">Link Widget</h4>
                    <WidgetButtons
                        index={index}
                        widget={widget}
                        widgets={widgets}
                        moveWidgetUp={moveWidgetUp}
                        moveWidgetDown={moveWidgetDown}
                        changeWidgetType={changeWidgetType}
                        deleteWidget={deleteWidget}
                    />
                </div>
                <div className="row ml-sm-2 col-sm-12">
                    <label>Link URL</label>
                    <input className="form-control" placeholder="Link URL"
                           defaultValue={widget.href}
                           onChange={(event) => changeWidgetLink(widget, event.target.value)}/>
                </div>
                <div className="row ml-sm-2 col-sm-12">
                    <input className="form-control" placeholder="Link text"
                           defaultValue={widget.title}
                           onChange={(event) => changeWidgetTitle(widget, event.target.value)}/>
                </div>
                <div className="row ml-sm-2 col-sm-12">
                    <input className="form-control" placeholder="https://www.youtube.com/user/jannunzi"/>
                </div>
                <div className="row ml-sm-2 col-sm-12">
                    <input className="form-control" placeholder="Widget name"
                           onChange={(event) => changeWidgetName(widget, event.target.value)}
                           defaultValue={widget.name}/>
                </div>
                <div className="row ml-sm-2 col-sm-12">
                    <h4>Preview</h4>
                </div>
            </div>
        }
        <div className="row ml-sm-2 col-sm-12">
            <a href={widget.href}>{widget.title}</a>
        </div>
    </div>

export default LinkWidget

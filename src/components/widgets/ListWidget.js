import WidgetButtons from "../WidgetButtons";
import React from "react";

const ListWidget = ({
                        index, widget, widgets, deleteWidget, changeWidgetType, moveWidgetUp, moveWidgetDown,
                        Previewed, changeWidgetName, changeListContents, changeListType
                    }) =>

    <div className="mb-5 card p-1">
        {
            !Previewed &&
            <div>
                <div className="form-group row ml-sm-2 col-sm-12">
                    <h4 className="mr-auto">List Widget</h4>
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
                    <label>List Items</label>
                    <textarea className="form-control"
                              defaultValue={widget.items.split(",").join("\n")}
                              onChange={(event) => changeListContents(widget, event.target.value)}
                              rows="4"/>
                </div>
                <div className="row ml-sm-2 col-sm-12">
                    <label>Widget Name</label>
                    <select className="form-control" onChange={(event) => changeListType(widget, event.target.value)}
                            defaultValue="unordered">
                        <option value="unordered">Unordered list</option>
                        <option value="ordered">Ordered list</option>
                    </select>
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
        <div className="form-group row ml-sm-2 col-sm-12">
            {
                widget.items && (widget.listType === "unordered" || widget.listType === undefined ?
                    <ul>
                        {
                            widget.items.split(",").map((item, key) =>
                                <li key={key}>{item}</li>)
                        }
                    </ul> :
                    <ol>
                        {
                            widget.items.split(",").map((item, key) =>
                                <li key={key}>{item}</li>)
                        }
                    </ol>)
            }
        </div>
    </div>;

export default ListWidget
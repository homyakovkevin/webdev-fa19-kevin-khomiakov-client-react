import WidgetButtons from "../WidgetButtons";
import React from "react";

const ListWidget = ({
                        index, widget, widgets, deleteWidget, moveWidgetUp, moveWidgetDown,
                        Previewed, updateWidget
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
                        deleteWidget={deleteWidget}
                    />
                </div>
                <div className="row ml-sm-2 col-sm-12">
                    <label>List Items</label>
                    <textarea className="form-control"
                              value={widget.items === null ? "" : widget.items.split(",").join("\n")}
                              onChange={(event) => updateWidget(widget.id, {
                                  ...widget,
                                  items: (event.target.value).split("\n").join(",")
                              })}
                              rows="4"/>
                </div>
                <div className="row ml-sm-2 col-sm-12">
                    <label>Widget Name</label>
                    <select className="form-control"
                            onChange={(event) => updateWidget(widget.id, {...widget, listType: event.target.value})}
                            defaultValue={widget.listType === null ? "unordered" : widget.listType}
                    >
                        <option value="unordered">Unordered list</option>
                        <option value="ordered">Ordered list</option>
                    </select>
                </div>
                <div className="row ml-sm-2 col-sm-12">
                    <input className="form-control" placeholder="Widget name"
                           onChange={(event) => updateWidget(widget.id, {...widget,name:event.target.value})}
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
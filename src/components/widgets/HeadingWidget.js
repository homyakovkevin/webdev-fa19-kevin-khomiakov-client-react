import WidgetButtons from "../WidgetButtons";
import React from 'react';

const HeadingWidget = ({
                           index, widget, widgets, deleteWidget, moveWidgetUp, moveWidgetDown, Previewed,
                           changeWidgetText, changeHeadSize, changeWidgetName, changeWidgetType,
                       }) =>

    <div className="mb-5 card p-1">
        {
            !Previewed &&
            <div>
                <div className="row ml-sm-2 col-sm-12">
                    <h4 className="mr-auto">Heading Widget</h4>
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
                <div className="form-group row ml-sm-2 col-sm-12">
                    <input onChange={(event) => changeWidgetText(widget, event.target.value)} className="form-control"
                           placeholder="Heading text"/>
                </div>
                <div className="form-group row ml-sm-2 col-sm-12">
                    <select className="form-control" defaultValue={widget.size}
                            onChange={(event) => changeHeadSize(widget, event.target.value)}>
                        <option value="h1">Heading 1</option>
                        <option value="h2">Heading 2</option>
                        <option value="h3">Heading 3</option>
                        <option value="h4">Heading 4</option>
                        <option value="h5">Heading 5</option>
                        <option value="h6">Heading 6</option>
                    </select>
                </div>
                <div className="form-group row ml-sm-2 col-sm-12">
                    <input onChange={(event) => changeWidgetName(widget, event.target.value)} className="form-control"
                           placeholder="Widget name"/>
                </div>
                <div className="form-group row ml-sm-2 col-sm-12">
                    <h4>Preview</h4>
                </div>
            </div>
        }
        <div className="form-group row ml-sm-2 col-sm-12">
            {
                widget.size === 'h1' &&
                <h1>{widget.text}</h1>
            }
            {
                widget.size === 'h2' &&
                <h2>{widget.text}</h2>
            }
            {
                widget.size === 'h3' &&
                <h3>{widget.text}</h3>
            }
            {
                widget.size === 'h4' &&
                <h4>{widget.text}</h4>
            }
            {
                widget.size === 'h5' &&
                <h5>{widget.text}</h5>
            }
            {
                widget.size === 'h6' &&
                <h6>{widget.text}</h6>
            }
        </div>
    </div>;

export default HeadingWidget
import React from "react";
import WidgetButtons from "../WidgetButtons";

const ParagraphWidget = ({index, widget, widgets,
                             updateWidget, deleteWidget, Previewed, moveWidgetUp, moveWidgetDown}) =>
    <div className="mb-5 card p-1">
        {
            !Previewed &&
            <div>
                <div className="row ml-sm-2 col-sm-12 d-flex justify-content-between">
                    <h4 className="mr-auto">Paragraph Widget</h4>
                    <WidgetButtons
                        index={index}
                        widget={widget}
                        widgets={widgets}
                        moveWidgetUp={moveWidgetUp}
                        moveWidgetDown={moveWidgetDown}
                        deleteWidget={deleteWidget}
                        updateWidget={updateWidget}
                    />
                </div>
                <div className="row ml-sm-2 col-sm-12">
                        <textarea className="form-control"
                                  placeholder="Lorem ipsum" onChange={(event) => updateWidget(widget.id, {...widget, text: event.target.value})}/>
                </div>
                <div className="row ml-sm-2 col-sm-12">
                    <input className="form-control" placeholder="Widget name"
                           onChange={(event) => updateWidget(widget.id, {...widget, name: event.target.value})}
                           defaultValue={widget.name}/>
                </div>
                <div className="row ml-sm-2 col-sm-12">
                    <h4>Preview</h4>
                </div>
            </div>
        }
        <div className="row ml-sm-2 col-sm-12">
            <label>{widget.text}</label>
        </div>
    </div>;

export default ParagraphWidget
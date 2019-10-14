import React from 'react'
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import LinkWidget from "./widgets/LinkWidget";
import ListWidget from "./widgets/ListWidget";
import ImageWidget from "./widgets/ImageWidget";

const WidgetList = ({widgets, deleteWidget, createWidget, updateWidget}) =>//extends React.Component{
    <ul>
        <h1>Something</h1>
        {
            widgets.map(widget =>
                <li key={widget.id}>
                    {widget.name}
                    {widget.type}
                    <select
                        onChange={(event) => updateWidget({...widget, type: event.target.value})}
                        value={widget.type}>
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="IMAGE">Image</option>
                        <option value="LIST">List</option>
                        <option value="LINK">Link</option>
                    </select>
                    <button
                        onClick={() => deleteWidget(widget.id)}>
                        Delete
                    </button>
                    {
                        widget.type === 'HEADING' &&
                        <HeadingWidget widget={widget} updateWidget={updateWidget}/>
                    }
                    {
                        widget.type === 'PARAGRAPH' &&
                        <ParagraphWidget widget={widget} updateWidget={updateWidget}/>
                    }
                    {
                        widget.type === 'LINK' &&
                        <LinkWidget widget={widget} updateWidget={updateWidget}/>
                    }
                    {
                        widget.type === 'LIST' &&
                        <ListWidget widget={widget} updateWidget={updateWidget}/>
                    }
                    {
                        widget.type === 'IMAGE' &&
                        <ImageWidget widget={widget} updateWidget={updateWidget}/>
                    }
                </li>
            )
        }
        <li>
            <button onClick={createWidget}>
                Add
            </button>
        </li>
    </ul>
export default WidgetList
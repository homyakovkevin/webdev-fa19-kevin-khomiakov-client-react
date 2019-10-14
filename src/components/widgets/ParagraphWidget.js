import React from 'react'

const ParagraphWidget = ({widget, updateWidget}) =>
    <div>
        <h1>Paragraph Widget [{widget.id}]</h1>
        <textarea
            defaultValue={widget.text}
            onChange={(e) => updateWidget({...widget, text: e.target.value})}
            placeholder="Paragraph text"></textarea>
        <h2>Preview</h2>
        <p>
            {widget.text}
        </p>
    </div>

export default ParagraphWidget
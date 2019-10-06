import React from 'react'

export default class Message extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <h1>{this.props.theMessage}</h1>
        )
    }
}
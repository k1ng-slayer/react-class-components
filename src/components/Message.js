// passing a function instead of using 'Event Handlers'

import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super();

        this.state = {
            message: "Hola!",
        };
    }

    changeMessage() {
        this.setState({
            message: "Great choice",
        });
    }

    render() {
        return (
            <>
                <h3>{this.state.message}</h3>
                <button onClick={() => this.changeMessage()}>Just Do It</button>
            </>
        );
    }
}

export default Message;

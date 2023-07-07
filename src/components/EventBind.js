// we need Event Binding in class components as Event Handlers cannot read setState property
// 'this' keyword is undefined in an Event Handler (you can console.log() to verify)
// there are three ways for Event Binding
// prefer using Approach 3, 4

import React, { Component } from "react";

class EventBind extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "This is the message",
        };

        // only for Approach 3
        // this.clickHandler = this.clickHandler.bind(this);
    }

    // only for Approach 1,2,3
    // clickHandler() {
    //   this.setState({
    //     message: "But this isn't the message now!",
    //   });
    //   // console.log(this)
    // }

    // only for Approach 4
    clickHandler = () => {
        this.setState({
            message: "But this isn't the message now!",
        });
    };

    render() {
        return (
            <>
                <div>{this.state.message}</div>
                {/* Approach 1: using 'bind()' keyword */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click me blud</button> */}
                {/* Approach 2: using 'arrow' function */}
                {/* <button onClick={() => this.clickHandler()}>Click me blud</button> */}
                {/* Approach 3: binding Event Handler in 'constructor' method instead of binding in 'render' method*/}
                {/* Approrach 4: using arrow function as a 'class' property */}
                <button onClick={this.clickHandler}>Click me homie</button>
            </>
        );
    }
}

export default EventBind;

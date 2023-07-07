// 'setState' method & using 'constructor' to update values

import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    // increment() {
    //   this.setState({
    //     count: this.state.count + 1,
    //   });
    // }

    // using 'prevState' parameter as React groups multiple setState calls into a single update for better performance
    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    }

    // introducing incrementFive() function to show React's drawbacks in updating setState method
    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <>
                <div>Count: {this.state.count} </div>
                <br />
                {/* <button onClick={() => this.increment()}>Increment</button> */}
                <button onClick={() => this.incrementFive()}>Increment</button>
            </>
        );
    }
}

export default Counter;

// why HOCs?
// A Higher-Order Component (HOC) is an advanced technique in React for reusing component logic

import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <>
                <button onClick={incrementCount}>
                    {this.props.name} clicked <i>{count}</i> times
                </button>
            </>
        );
    }
}

export default withCounter(ClickCounter, 5);

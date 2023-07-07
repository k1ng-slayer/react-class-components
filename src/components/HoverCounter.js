// HOC

import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <>
                <button onMouseOver={incrementCount}>
                    Hovered <i>{count}</i> times in {this.props.place}
                </button>
            </>
        );
    }
}

export default withCounter(HoverCounter, 1);

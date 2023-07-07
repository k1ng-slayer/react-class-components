// A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

import React, { Component } from "react";

class User extends Component {
    render() {
        return (
            <div>
                <b>{this.props.render(true)}</b> is the best
            </div>
        );
    }
}

export default User;

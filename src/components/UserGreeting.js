// conditional rendering

import React, { Component } from "react";

class UserGreeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
        };
    }
    render() {
        // Approach 1: using if/else
        // if (this.state.isLoggedIn) {
        //   return <p>Welcome Leo</p>;
        // } else {
        //   return <p>Welcome Ilkay</p>;
        // }
        // Approach 2: using element variables
        // let message;
        // if (this.state.isLoggedIn) {
        //   message = <p>Welcome Leo</p>;
        // } else {
        //   message = <p>Welcome Ilkay</p>;
        // }
        // return <>{message}</>;
        // Approach 3: using ternary conditional operators
        return this.state.isLoggedIn ? (
            <p>Welcome Leo</p>
        ) : (
            <p>Welcome Ilkay</p>
        );
        // Approach 4: using short circuit operator
        // return this.state.isLoggedIn && <p>Welcome Leo</p>;
    }
}

export default UserGreeting;

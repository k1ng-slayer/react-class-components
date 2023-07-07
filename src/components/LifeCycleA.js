import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
    //Method 1: Mounting Lifecycle Methods
    constructor(props) {
        super(props);

        this.state = {
            name: "Giannis",
        };
        console.log("lcA constructor");
    }

    //Method 2: Mounting Lifecycle Methods
    //Method 1: Updating Lifecycle Methods
    static getDerivedStateFromProps(props, state) {
        console.log("lcA getDerivedStateFromProps");
        return null;
    }

    //Method 4: Mounting Lifecycle Methods
    componentDidMount() {
        console.log("lcA componentDidMount");
    }

    //Method 2: Updating Lifecycle Methods
    shouldComponentUpdate() {
        console.log("lcA shouldComponentUpdate");
    }

    //Method 4: Updating Lifecycle Methods
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("lcA getSnapshotBeforeUpdate");
        return null;
    }

    //Method 5: Updating Lifecycle Methods
    componentDidUpdate() {
        console.log("lcA componentDidUpdate");
    }

    changeState = () => {
        this.setState({
            name: "Antetokounmpo",
        });
    };

    //Method 3: Mounting Lifecycle Methods
    //Method 3: Updating Lifecycle Methods
    render() {
        console.log("lcA render");
        return (
            <>
                LifeCycleA
                <br />
                <button onClick={this.changeState}>Change State</button>
                <br />
                <LifeCycleB />
            </>
        );
    }
}

export default LifeCycleA;

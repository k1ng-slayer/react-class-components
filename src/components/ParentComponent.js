import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            parentName: "Parent",
        };

        this.greetParent = this.greetParent.bind(this);
    }

    // passing methods in props to be executed in 'ChildComponent'
    // greetParent() {
    //   // alert("Hello" + this.state.parentName);
    //   alert(`Hello ${this.state.parentName}`); // using template literals
    // }

    // receieving parameters from child to parent
    greetParent(childname1, childname2) {
        // alert("Hello" + this.state.parentName);
        alert(
            `Hello ${this.state.parentName} from ${childname1} & ${childname2} `
        ); // using template literals
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        );
    }
}

export default ParentComponent;

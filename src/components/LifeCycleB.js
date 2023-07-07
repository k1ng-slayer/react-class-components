// child component for LifeCycleA

import React, { Component } from "react";

class LifeCycleB extends Component {
  //Method 1: Mounting Lifecycle Methods
  constructor(props) {
    super(props);

    this.state = {
      name: "Giannis",
    };
    console.log("lcB constructor");
  }

  //Method 2: Mounting Lifecycle Methods
  //Method 1: Updating Lifecycle Methods
  static getDerivedStateFromProps(props, state) {
    console.log("lcB getDerivedStateFromProps");
    return null;
  }

  //Method 4: Mounting Lifecycle Methods
  componentDidMount() {
    console.log("lcB componentDidMount");
  }

  //Method 2: Updating Lifecycle Methods
  shouldComponentUpdate() {
    console.log("lcB shouldComponentUpdate");
  }

  //Method 4: Updating Lifecycle Methods
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("lcB getSnapshotBeforeUpdate");
    return null;
  }

  //Method 5: Updating Lifecycle Methods
  componentDidUpdate() {
    console.log("lcB componentDidUpdate");
  }

  //Method 3: Mounting Lifecycle Methods
  //Method 3: Updating Lifecycle Methods
  render() {
    console.log("lcB render");
    return <>LifeCycleB</>;
  }
}

export default LifeCycleB;

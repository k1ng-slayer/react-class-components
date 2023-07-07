// adding 'ref' to an HTML element
// ref or reference is used to focus on a given compenent

import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    // console.log(this.inputRef);
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={this.clickHandler}>ClickBait</button>
      </>
    );
  }
}

export default RefsDemo;

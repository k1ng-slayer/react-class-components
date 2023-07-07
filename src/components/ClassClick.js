// class component 'Event Handling'

import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("Just Did It, Again");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Just Do It, Again!</button>
      </div>
    );
  }
}

export default ClassClick;

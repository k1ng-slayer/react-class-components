import React, { Component, useContext } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

class ComponentE extends Component {
  static contextType = UserContext;

  render() {
    return (
      <>
        ComponentE context = {this.context}
        <ComponentF />
      </>
    );
  }
}

export default ComponentE;

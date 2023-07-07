// Pure Component (only for class component)
// PC performs shallow comparison. It'll only return re-render if there is any difference b/w prevState v/s currentState & prevProps v/s currentProps
// it prevents unnecessary re-rendering
// improve the performance of your application. It reduces the number of render cycles and minimizes the workload on the virtual DOM diffing algorithm
// you don't need to manually implement the shouldComponentUpdate method for simple prop and state comparisons.

import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure Component");
    return <>Pure Component {this.props.name}</>;
  }
}

export default PureComp;

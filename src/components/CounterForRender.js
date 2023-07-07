// render props is a technique for sharing code b/w React components using a prop whose value is a FUNCTION
// calling it 'render' is just a convention, it can be called anything as it is just a name of a prop ( whose value is a function)

import React, { Component } from "react";

class CounterForRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    // return <>{this.props.render(this.state.count, this.incrementCount)}</>;
    return <>{this.props.children(this.state.count, this.incrementCount)}</>;
  }
}

export default CounterForRender;

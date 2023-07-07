// why render props?

import React, { Component } from "react";

class HoverCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <button onMouseOver={incrementCount}>
        Hovered <i>{count}</i> times
      </button>
    );
  }
}

export default HoverCounterTwo;

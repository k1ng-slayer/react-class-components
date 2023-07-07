// HOC implementation

import React from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  class withCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + incrementNumber, // incrementNumber is the parameter that decides by how much the number must be increamented
        };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props} // we have to pass the rest of the props via HOC as the props defined in App.js are passed to the HOC & not the child component directly
        />
      );
    }
  }
  return withCounter;
};

export default withCounter;

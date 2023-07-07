// making of a 'class' component

import React, { Component } from "react";

class Adios extends Component {
  render() {
    return (
      <h1>
        Adios, Amigos! {this.props.fname} freakin' {this.props.lname}
      </h1>
    );
  }
}

export default Adios;

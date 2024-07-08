import React, { Component } from "react";

export default class Student3 extends Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name, roll: this.props.roll };
  }
  render() {
    return (
      <div>
        <h3>Name is:{this.props.name}</h3>
        <h3>Roll is:{this.props.roll}</h3>
      </div>
    );
  }
}

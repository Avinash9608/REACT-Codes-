import React, { Component } from "react";

export default class Student2 extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Aniket", roll: 102 };
  }
  render() {
    return (
      <div>
        <h3>Name is :{this.state.name}</h3>
        <h3>Roll is :{this.state.roll}</h3>
      </div>
    );
  }
}

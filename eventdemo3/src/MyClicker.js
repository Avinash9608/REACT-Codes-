import React, { Component } from "react";

export default class MyClicker extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
    this.genRandNumber = this.genRandNumber.bind(this);
  }
  genRandNumber() {
    let randNum = Math.floor(Math.random() * 10) + 1;
    this.setState({ num: randNum });
  }
  render() {
    return (
      <div>
        <h2>Current Number Is :{this.state.num}</h2>
        {this.state.num === 6 ? (
          <b>You Win</b>
        ) : (
          <button onClick={this.genRandNumber}>Click Me</button>
        )}
      </div>
    );
  }
}

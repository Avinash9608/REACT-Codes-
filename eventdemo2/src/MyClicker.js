import React, { Component } from "react";

export default class MyClicker extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
    this.handleClicker = this.handleClicker.bind(this);
  }
  handleClicker() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    return (
      <div>
        <h2>Counter is :{this.state.counter}</h2>
        <button onClick={this.handleClicker}>Click Me</button>
      </div>
    );
  }
}

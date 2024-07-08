import React, { Component } from "react";

export default class MyClicker extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
    this.handleClicker = this.handleClicker.bind(this);
    this.handleTripleClicker = this.handleTripleClicker.bind(this);
  }
  handleClicker(e) {
    this.setState({ counter: this.state.counter + 1 });
  }
  handleTripleClicker(e) {
    this.setState({ counter: this.state.counter + 3 });
  }
  render() {
    return (
      <div>
        <h2>Counter is :{this.state.counter}</h2>
        <button onClick={this.handleClicker}>Increment by 1</button>
        <button onClick={this.handleTripleClicker}>Increment by 3</button>
      </div>
    );
  }
}

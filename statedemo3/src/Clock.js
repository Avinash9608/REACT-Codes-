import React, { Component } from "react";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = { currDate: new Date() };
    setInterval(this.updateClock, 1000);
  }
  updateClock = () => {
    this.setState({ currDate: new Date() });
  };
  render() {
    return (
      <div>
        <h2>Hello Everyone</h2>
        <h3>Current Date And Time :{this.state.currDate.toLocaleString()}</h3>
      </div>
    );
  }
}

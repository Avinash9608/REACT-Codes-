import React, { Component } from "react";
import Lottery from "./Lottery";

export default class App extends Component {
  render() {
    return (
      <div>
        <Lottery />
        <Lottery title="Mini Lotto" numBalls={4} />
        <Lottery title="Mini Lotto" numBalls={5} maxValue={100} />
      </div>
    );
  }
}

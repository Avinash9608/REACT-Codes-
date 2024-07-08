import React, { Component } from "react";

export default class MyButtom extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    console.log("Inside handler:");
    console.log(this);
    let today = new Date();
    alert(today);
  };
  render() {
    // console.log("Inside render:");
    // console.log(this);
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

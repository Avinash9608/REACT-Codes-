import React, { Component } from "react";
import "./ProductList.css";
import Product from "./Product";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props.items };
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(itemName, e) {
    let arr = this.state.items.filter((x) => x !== itemName);
    this.setState({ items: arr });
  }

  render() {
    let plist = this.state.items.map((item, index) => (
      <Product key={index} item={item} remove={this.deleteItem} />
    ));

    return (
      <div className="ProductList">
        <h1>Available Products</h1>
        <hr />
        <div>
          <ul>{plist}</ul>
        </div>
      </div>
    );
  }
}

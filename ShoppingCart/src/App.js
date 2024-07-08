import React, { Component } from "react";
import ProductList from "./ProductList";
export default class App extends Component {
  render() {
    return (
      <div>
        <ProductList
          items={[
            "JBL Earphones",
            "PoleStar BackPack",
            "One Plus Nord 2",
            "Apple I-Phone 13",
            "Cannon DSLR",
            "Dettol N95 Mask",
          ]}
        />
      </div>
    );
  }
}

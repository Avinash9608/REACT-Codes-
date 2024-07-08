import React, { Component } from "react";
import foods from "./foods";
import { choice, remove } from "./helper";
export default class Fruits extends Component {
  render() {
    let randomFruit = choice(foods);
    let remainingFruits = remove(foods, randomFruit);
    return (
      <div>
        <p>Total fruits:{foods.length}</p>
        <p>They are:{foods.join()}</p>
        <p>Chosen Fruit:{randomFruit}</p>
        <p>Remaining fruits:{remainingFruits.length}</p>
        <p>They are:{remainingFruits.join()}</p>
      </div>
    );
  }
}

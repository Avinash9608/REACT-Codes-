// function App() {
//   return (
//     <div>
//       <h2>Hello Everyone!</h2>
//     </div>
//   );
// }
// export default App; //default export because only one component in this module
import React, { Component } from "react";
import Fruits from "./Fruits";
export default class App extends Component {
  render() {
    return (
      <div>
        <Fruits />
      </div>
    );
  }
}

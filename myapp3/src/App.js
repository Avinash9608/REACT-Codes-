// function App() {
//   return (
//     <div>
//       <h2>Hello Everyone!</h2>
//     </div>
//   );
// }
// export default App; //default export because only one component in this module
import React, { Component } from "react";
import MySelf from "./MySelf";
export default class App extends Component {
  render() {
    return (
      <div>
        <MySelf />
      </div>
    );
  }
}

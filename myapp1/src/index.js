// index.js will render the App so we need root
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

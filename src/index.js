import React from "react";
import ReactDOM from "react-dom";
import App from "./router/App";
import "./components/style/GlobalStyles.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#app")
);

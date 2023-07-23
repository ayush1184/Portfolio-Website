import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.js";
import "./style.css";

document.body.style.margin = `0px`;

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

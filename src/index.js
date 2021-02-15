import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/app.scss";

const Index = () => {
  return <App></App>;
};

if (document.getElementById("root")) {
  ReactDOM.render(<Index />, document.getElementById("root"));
}
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const Index = () => {
  return <App></App>;
};

if (document.getElementById("root")) {
  ReactDOM.render(<Index />, document.getElementById("root"));
}

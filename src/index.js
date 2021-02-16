import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/app.scss";
import { TransectionsProvider } from "./store/context/transectionsContext";

const Index = () => {
  

  return (
    <TransectionsProvider>
      <App />
    </TransectionsProvider>
  );
};

if (document.getElementById("root")) {
  ReactDOM.render(<Index />, document.getElementById("root"));
}

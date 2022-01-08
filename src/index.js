import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//First argument it takes is element to create
//Second argument - where to insert it
ReactDOM.render(
  React.createElement("h1", { style: { color: "blue" } }, "I'm a heading!"),
  document.getElementById("root")
);

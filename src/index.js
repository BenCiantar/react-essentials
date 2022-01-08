import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// ReactDOM.render(
//   React.createElement(
//     "h1",  //Element to create
//     { style: { color: "blue" } }, //Properties to assign it
//     "I'm a heading!"), //Content to insert
//   document.getElementById("root") //Where to insert the element
// );

ReactDOM.render(
  React.createElement(
    "ul",
    null,
    React.createElement("li", null, "Monday"),
    React.createElement("li", null, "Tuesday"),
    React.createElement("li", null, "Wednesday"),
    React.createElement("li", null, "Thursday"),
    React.createElement("li", null, "Friday")
  ),
  document.getElementById("root")
);

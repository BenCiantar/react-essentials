import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// ReactDOM.render(
//   React.createElement(
//     "h1",  //Element to create
//     { style: { color: "blue" } }, //Properties to assign it
//     "I'm a heading!"), //Content to insert
//   document.getElementById("root") //Where to insert the element
// );

//Creating nested elements using basic nested arguments
// ReactDOM.render(
//   React.createElement(
//     "ul",
//     null,
//     React.createElement("li", null, "Monday"),
//     React.createElement("li", null, "Tuesday"),
//     React.createElement("li", null, "Wednesday"),
//     React.createElement("li", null, "Thursday"),
//     React.createElement("li", null, "Friday")
//   ),
//   document.getElementById("root")
// );

//Creating an element using JSX
// ReactDOM.render(
//   <ul>
//     <li>Monday</li>
//     <li>Tuesday</li>
//     <li>Wednesday</li>
//   </ul>,
//   document.getElementById("root")
// );

//Rener whatever is returned by the imported App function
ReactDOM.render(<App />, document.getElementById("root"));

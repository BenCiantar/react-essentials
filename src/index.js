import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

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

//Create a second app to render alongside the first
// function AppTwo() {
//   return <h1>This is the second app</h1>;
// }

//Two apps cannot be rendered together unless wrapped
//Rather than wrapping in a div, can wrap in a fragment instead
//Fragments are no inserted into the DOM, saving on clutter
// ReactDOM.render(
//   <React.Fragment>
//     <App />, 
//     <AppTwo />
// </React.Fragment>,
//   document.getElementById("root")
// );


//Shorthand way of creating a fragment
// ReactDOM.render(
//   <>
//     <App />, 
//     <AppTwo />
// </>,
//   document.getElementById("root")
// );

//Array destructuring
// const [mostImportantItem, , thirdItem] = [
//   "Mask",
//   "Duct tape",
//   "Gloves"
// ]
// console.log(thirdItem);

//Render whatever is returned by the imported App function
// ReactDOM.render(
//   <App authorized={false} />, 
//   document.getElementById("root")
// );

//Wrapping app in router tag gives it access to features of router
ReactDOM.render(
  <Router>
    <App />
  </Router>,
 
  document.getElementById("root")
);
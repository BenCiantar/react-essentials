import React, { useState, useEffect } from "react";
import "./App.css";
// import spiderman from "../src/spiderman.png"

// function Header(props) {
//   return (
//     <header>
//       <h1>{props.name}'s Bobs and Bits</h1>
//     </header>
//   );
// }
// function Main(props) {
//   return (
//     <section>
//       <p>We sell {props.adjective} things. Very weird things.</p>
//       <img src={spiderman} alt="Spider-man Logo" height="150px" />
//       <ul style={{ listStyleType: "none" }}>
//         {props.items.map((item) => <li key={item.id}>{item.title}</li>)}
//       </ul>
//     </section>
//   );
// }
// function Footer(props) {
//   return (
//     <section>
//       <p>Seriously. It's {props.year}</p>
//     </section>
//   );
// }

// const items = [
//   "Fishing rod", 
//   "Cheese sandwich", 
//   "Pokemon cards"
// ];

// //Transform array of strings into array of objects with ids
// const itemObjects = items.map((item, i) => ({id: i, title: item}));

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Header name="Ben" />
//         <Main adjective="stanky" items={itemObjects}/>
//         <Footer year={new Date().getFullYear()} />
//       </header>
//     </div>
//   );
// }

// function SecretComponent() {
//   return <h1>SECRET INFO - AUTHORIZED EYES ONLY</h1>
// }

// function RegularComponent() {
//   return <h1>Info for regular plebs</h1>
// }

// function App(props) {
//   return (
//     <>
//       {props.authorized ? 
//         (<SecretComponent />
//       ) : (
//         <RegularComponent />
//       )}
//     </>
//   );
// }

//Using object destructuring to clear up syntax
// function App(authorized) {
//   return (
//     <>
//       {authorized ? 
//         (<SecretComponent />
//       ) : (
//         <RegularComponent />
//       )}
//     </>
//   );
// }

//useState returns an array - firs item is the current state, 
//second is a function that update state
//Anon function bound to button updates state with defined function

//useEffect sets a callback to run as a side effect
//Second argument dependency array - leave empty to only trigger effect first time it renders
//Adding a state will trigger the function whenever that state changes
function App() {
  //Use array destructuring to define current state and functino to change state
  const [flavour, setFlavour] = useState("sweet");
  const [spiciness, setSpiciness] = useState("hawt");

  useEffect(() => {
    console.log(`I'm a ${flavour} boi!`)
  }, [flavour]);

  useEffect(() => {
    console.log(`But I like it ${spiciness}!`)
  }, [spiciness]);
  
  return (
    <>
      <h1>Favourite flavour is {flavour} but I prefer it {spiciness}!</h1>
      <button onClick={() => setFlavour("sour")}>
        Grow up
      </button>
      <button onClick={() => setFlavour("salty")}>
        Become a sailor
      </button>
      <button onClick={() => setFlavour("sweet")}>
        Babify
      </button>
      <br />
      <button onClick={() => setSpiciness("chilly")}>
        Cool it down
      </button>
      <button onClick={() => setSpiciness("hawt")}>
        Spice it up
      </button>
    </>
  );
}

export default App;

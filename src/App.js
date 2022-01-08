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

function SecretComponent() {
  return <h1>SECRET INFO - AUTHORIZED EYES ONLY</h1>
}

function RegularComponent() {
  return <h1>Info for regular plebs</h1>
}

function App(props) {
  return (
    <>
      {props.authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  );
}

export default App;

import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Bobs and Bits</h1>
    </header>
  );
}
function Main(props) {
  return (
    <section>
      <p>We sell {props.adjective} things. Very weird things.</p>
    </section>
  );
}
function Footer(props) {
  return (
    <section>
      <p>Seriously. It's {props.year}</p>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header name="Ben" />
        <Main adjective="stanky" />
        <Footer year={new Date().getFullYear()} />
      </header>
    </div>
  );
}

export default App;

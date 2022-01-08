import "./App.css";

function Header() {
  return (
    <header>
      <h1>Ben's Bobs and Bits</h1>
    </header>
  );
}
function Main() {
  return (
    <section>
      <p>We sell weird things. Very weird things.</p>
    </section>
  );
}
function Footer() {
  return (
    <section>
      <p>Seriously.</p>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Main />
        <Footer />
      </header>
    </div>
  );
}

export default App;

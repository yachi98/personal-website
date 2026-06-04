import Background from "./components/Background/Background";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Menu />
        <Background />
        <div className="hero">
          <h1 className="hero-title">Daniel - Yachnikov - Hughes -{" "}</h1>
          <h3 className="hero-subtitle">Software Engineer</h3>
        </div>
      </header>
    </div>
  );
}

export default App;

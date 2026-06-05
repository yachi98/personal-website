import { Routes, Route } from "react-router-dom";
import Background from "./components/Background/Background";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Menu />
        <Background />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

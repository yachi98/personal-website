import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Background from "./components/Background/Background";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Menu opened={menuOpen} setOpened={setMenuOpen} />
        <Background />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {!menuOpen && <Footer />}
      </header>
    </div>
  );
}

export default App;

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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "80px",
              // position: "absolute",
              // left: "20px",
              color: "white",
              zIndex: 9999,
              fontFamily: "Noirden",
              fontWeight: 400,
              width: "45%",
              textAlign: "left",
            }}
          >
            Daniel - Yachnikov - Hughes -{" "}
          </h1>
          <h3
            style={{
              fontSize: "40px",
              // position: "absolute",
              // left: "20px",
              color: "white",
              zIndex: 9999,
              fontFamily: "Noirden",
              fontWeight: 400,
              // width: "50%",
              // textAlign: "left",
            }}
          >
            Software Engineer
          </h3>
        </div>
      </header>
    </div>
  );
}

export default App;

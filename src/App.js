import React from "react";
import FunctionalComponent from "./components/FunctionalComponents/FunctionalComponents";
import Logo from "./assets/images/logo192.png"
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <img src={Logo} />
        <FunctionalComponent />
      </div>
      <div className="footer">
        <p>Developed by Mehrgan Akbari ^_^</p>
      </div>
    </div>
  );
}

export default App;
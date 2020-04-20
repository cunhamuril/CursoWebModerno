import React from "react";
import "./App.css";

import Home from "./views/home/Home";

function App() {
  return (
    <div className="App">
      <Home msg="Componente Home" />
      <Home msg="Do React" />
    </div>
  );
}

export default App;

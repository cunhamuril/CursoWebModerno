import React, { useState } from "react";

import "./Home.css";

const Home = (props) => {
  const [legenda, setLegenda] = useState("Estou no React");

  function resetLegenda() {
    console.log("Evento de click no React!");
  }

  return (
    <div className="home">
      <h1>{props.msg}</h1>
      <h2>{legenda}</h2>

      <input
        type="text"
        value={legenda}
        onChange={(e) => setLegenda(e.target.value)}
      />

      <button onClick={resetLegenda}>Reset Legenda</button>
    </div>
  );
};

export default Home;

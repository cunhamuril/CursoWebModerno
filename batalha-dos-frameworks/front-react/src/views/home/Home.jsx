import React from "react";

import "./Home.css";

const Home = (props) => {
  let legenda = "Estou no React";

  function resetLegenda() {
    console.log("Evento de click no React!");
  }

  return (
    <div className="home">
      <h1>{props.msg}</h1>
      <h2>{legenda}</h2>

      <input type="text" value={legenda} readOnly />

      <button onClick={resetLegenda}>Reset Legenda</button>
    </div>
  );
};

export default Home;

import React from "react";

import "./Home.css";

const Home = (props) => (
  <div className="home">
    <h1>{props.msg}</h1>
  </div>
);

export default Home;

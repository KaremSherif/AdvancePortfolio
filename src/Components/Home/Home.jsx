import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import Scrolldown from "./Scrolldown";
const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <Social />

          <div className="home-img"> </div>
          <Data />
        </div>
        <Scrolldown />
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../views/Navbar";
import "../style/home.css";
import { headerImg } from "../assets/assets";
import { headerText } from "../data/home";

function Home() {
  return (
    <div className="home-body">
      <div className="navbar-items">
        <Navbar />
      </div>
      <div className="row header-items">
        <div className="col-lg-6 header-text">
          <h1>{headerText.header}</h1>
          <p>{headerText.intro}</p>
          <div className="header-buttons">
            <Link to="/projects">
              <button>Projects</button>
            </Link>
            <Link to="/blogs">
              <button>Blogs</button>
            </Link>
          </div>
        </div>
        <div className="col-lg-6 header-img">
          <img className="header-image" src={headerImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;

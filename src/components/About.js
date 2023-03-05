import React from "react";
import Navbar from "../views/Navbar";

import { aboutInfo, skillInfo } from "../data/about";
import "../style/about.css";

import { me } from "../assets/assets";

function About() {
  return (
    <div className="about-body">
      
      {/* Navbar Component */}

      <div className="navbar-items">
        <Navbar />
      </div>

      {/* About Screen 1 */}

      <div className="row screen-1">
        <div className="col-lg-7 about-text">
          <div className="about-header-text">
            <h1>{aboutInfo.header}</h1>
          </div>
          <div className="about-body">
            <p>{aboutInfo.about1}</p>
            <p>{aboutInfo.about2}</p>
            <p>{aboutInfo.about3}</p>
          </div>
        </div>
        <div className="col-lg-5 profile">
          <img src={me} className="profile-img" alt="profile" />
        </div>
      </div>

      {/* About Screen 2 */}

     
    </div>
  );
}

export default About;

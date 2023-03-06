import React from "react";
import Navbar from "../views/Navbar";

import { aboutInfo, skillInfo } from "../data/about";
import "../style/about.css";

import { me, skills, front, react } from "../assets/assets";

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
            <p className="about-body-text">{aboutInfo.about1}</p>
            <p className="about-body-text">{aboutInfo.about2}</p>
            <p className="about-body-text">{aboutInfo.about3}</p>
          </div>
        </div>
        <div className="col-lg-5 profile">
          <img src={me} className="profile-img" alt="profile" />
        </div>
      </div>

      <div className="row screen-2">
        <div className="col-lg-4">
          <div className="skill-container">
            <img className="skill-img" src={skills} alt="skill" />
            <h4 className="skill-intro">{skillInfo.header1}</h4>
            <p className="skill-content">{skillInfo.intro1}</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="skill-container">
            <img className="skill-img" src={react} alt="skill" />
            <h4 className="skill-intro">{skillInfo.header2}</h4>
            <p className="skill-content">{skillInfo.intro2}</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="skill-container">
            <img className="skill-img" src={front} alt="skill" />
            <h4 className="skill-intro">{skillInfo.header3}</h4>
            <p className="skill-content">{skillInfo.intro3}</p>
          </div>
        </div>
      </div>

      <div className="row screen-3">
        <div className="col-lg-6">
          <div className="programming"></div>
        </div>

        <div className="col-lg-6">
          <div className="programming"></div>
        </div>
      </div>
    </div>
  );
}

export default About;

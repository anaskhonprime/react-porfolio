import React from "react";
import Navbar from "../views/Navbar";

import {
  aboutInfo,
  skillInfo,
  skillBar,
  techImages,
  githubInfo,
} from "../data/about";
import "../style/about.css";

import { me, skills, front, react, github } from "../assets/assets";

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
          <div className="programming">
            <div className="skills-cont">
              <h2 className="skill-header">My Skills</h2>
              <div className="pause"></div>
              {skillBar.map((key, a) => (
                <div key={a} className="barContainer">
                  <div
                    className="fillerStyle"
                    style={{
                      width: `${skillBar[a].value}`,
                      backgroundColor: `${skillBar[a].color}`,
                    }}>
                    <p className="labelName">
                      {skillBar[a].name}
                      <span className="labelStyle"></span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="programming">
            <h2 className="skill-header">GitHub Activity</h2>
            <div className="pause"></div>
            <div className="github-info">
              <div>
                {githubInfo.map((key, a) => (
                  <div key={a} className="tech-container">
                    <div className="github-items">
                      <p>{githubInfo[a].name}</p>
                      <p>{githubInfo[a].mark}</p>
                      <p>{githubInfo[a].value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="programming">
            <h2 className="skill-header">Tech Stack & Tools</h2>
            <div className="pause"></div>
            <p className="github-info">
              <div>
                {techImages.map((key, a) => (
                  <div key={a} className="tech-container">
                    <img
                      className="tech-img"
                      src={techImages[a].url}
                      alt={techImages[a].name}
                    />
                  </div>
                ))}
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

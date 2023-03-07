import React from "react";
import Navbar from "../views/Navbar";

import {
  aboutInfo,
  skillInfo,
  skillBar,
  techImages,
  githubInfo,
  personality,
} from "../data/about";

import "../style/about.css";

import { me, skills, front, react } from "../assets/assets";

function About() {
  return (
    <div className="about-body">
      <div className="navbar-items">
        <Navbar />
      </div>
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
        <div className="header-center">
          <h1>Education History & Experience</h1>
          <div className="pause-white"></div>
        </div>
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
      <div className="row screen-2">
        <div className="header-center">
          <h1>Skills & GitHub Activity</h1>
          <div className="pause-white"></div>
        </div>
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
                      <div className="github-header">{githubInfo[a].name}</div>
                      <div className="github-mark">{githubInfo[a].value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h2 className="skill-header tech-margin">Tech Stack & Tools</h2>
            <div className="pause"></div>
            <div className="github-info">
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
            </div>
          </div>
        </div>
      </div>
      <div className="row screen-3">
        <div className="header-center">
          <h1>Personality as Developer</h1>
          <div className="pause-white"></div>
        </div>
        {personality.map((key, a) => (
          <div className="col-lg-4">
            <div key={a} className="personality-container">
              <h4 className="skill-intro">{personality[a].name}</h4>
              <p className="skill-content">{personality[a].content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;

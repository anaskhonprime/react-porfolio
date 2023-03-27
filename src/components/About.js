import React from "react";
import Navbar from "../views/Navbar";

import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter } from "../components/Animations/animation";

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
            <Reveal keyframes={fadeInDownShorter} duration={500} delay={300}>
              <p className="about-body-text">{aboutInfo.about1}</p>
            </Reveal>
            <Reveal keyframes={fadeInDownShorter} duration={500} delay={400}>
              <p className="about-body-text">{aboutInfo.about2}</p>
            </Reveal>
            <Reveal keyframes={fadeInDownShorter} duration={500} delay={500}>
              <p className="about-body-text">{aboutInfo.about3}</p>
            </Reveal>
          </div>
        </div>
        <div className="col-lg-5 profile">
          <Reveal keyframes={fadeInDownShorter} duration={500} delay={600}>
            <img src={me} className="profile-img" alt="profile" />
          </Reveal>
        </div>
      </div>

      <div className="row screen-2">
        <div className="header-center">
          <h2>Education History & Experience</h2>
          <div className="pause-white"></div>
        </div>
        <div className="col-lg-4">
          <Reveal keyframes={fadeInDownShorter} duration={500} delay={300}>
            <div className="card-design">
              <div className="skill-container">
                <img className="skill-img" src={skills} alt="skill" />
                <h5 className="skill-intro">{skillInfo.header1}</h5>
                <div className="pause-single"></div>
                <p className="skill-content">{skillInfo.intro1}</p>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="col-lg-4">
          <Reveal keyframes={fadeInDownShorter} duration={500} delay={400}>
            <div className="card-design">
              <div className="skill-container">
                <img className="skill-img" src={react} alt="skill" />
                <h4 className="skill-intro">{skillInfo.header2}</h4>
                <div className="pause-single"></div>
                <p className="skill-content">{skillInfo.intro2}</p>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="col-lg-4">
          <Reveal keyframes={fadeInDownShorter} duration={500} delay={500}>
            <div className="card-design">
              <div className="skill-container">
                <img className="skill-img" src={front} alt="skill" />
                <h4 className="skill-intro">{skillInfo.header3}</h4>
                <div className="pause-single"></div>
                <p className="skill-content">{skillInfo.intro3}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="row screen-2">
        <div className="header-center">
          <h2>Skills & GitHub Activity</h2>
          <div className="pause-white"></div>
        </div>
        <div className="col-lg-6">
          <div className="programming">
            <div className="skills-cont">
              <h3 className="skill-header">My Skills</h3>
              <div className="pause"></div>
              {skillBar.map((key, a) => (
                <Reveal
                  keyframes={fadeInDownShorter}
                  duration={500}
                  delay={100 * (a + 1)}>
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
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="programming free">
            <h2 className="skill-header">GitHub Activity</h2>
            <div className="pause"></div>
            <Reveal keyframes={fadeInDownShorter} duration={500} delay={500}>
              <div className="github-info">
                <div>
                  {githubInfo.map((key, a) => (
                    <div key={a} className="tech-container">
                      <div className="github-items">
                        <div className="github-header">
                          {githubInfo[a].name}
                        </div>
                        <div className="github-mark">{githubInfo[a].value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <h2 className="skill-header tech-margin">Tech Stack & Tools</h2>
            <div className="pause"></div>
            <Reveal keyframes={fadeInDownShorter} duration={500} delay={500}>
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
            </Reveal>
          </div>
        </div>
      </div>
      <div className="row screen-3">
        <div className="header-center">
          <h2>Personality as Developer</h2>
          <div className="pause-white"></div>
        </div>

        {personality.map((key, a) => (
          <div className="col-lg-4">
            <div key={a} className="personality-container">
              <Reveal keyframes={fadeInDownShorter} duration={500} delay={500}>
                <h4 className="skill-intro">{personality[a].name}</h4>

                <div className="pause-single"></div>
              </Reveal>
              <Reveal keyframes={fadeInDownShorter} duration={500} delay={600}>
                <p className="skill-content">{personality[a].content}</p>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;

import React from "react";
import { Link } from "react-router-dom";

import "../style/resume.css";
import { CodeSVG } from "./Svg/SvgIcons.js";
import {
  resumeHeader,
  Intro,
  beckend,
  frontend,
  tools,
} from "../data/resume.js";

function Resume() {
  return (
    <div className="resume-body">
      <div className="row resume-1">
        <div className="col-lg-8 start">
          <img src={resumeHeader.profile} className="img-small" alt="" />
          <p>{resumeHeader.header}</p>
        </div>
        <div className="col-lg-4 links">
          <ul className="resume-links">
            <Link className="r-link" to="/home">
              <li>Home</li>
            </Link>
            <Link className="r-link" to="/">
              <li>Github</li>
            </Link>
            <Link className="r-link" to="">
              <li>Blogs</li>
            </Link>
            <Link className="r-link" to="/projects">
              <li>Projects</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="row resume-2">
        <div className="banner">
          <img src={resumeHeader.banner} className="banner-img" alt="" />
        </div>
      </div>

      <div className="row resume-3">
        <div className="resume-content">
          <div className="container">
            <img src={resumeHeader.profile} className="main-img" alt="" />
            <div className="">
              <h3 className="greeting">{resumeHeader.header}</h3>
            </div>
          </div>

          <div className="row intro-body">
            <div className="row intro-header">
              <div className="col-lg-1">
                <CodeSVG />
              </div>
              <div className="col-lg-11 main-text">
                <h4>About Me</h4>
              </div>
              <hr />
            </div>
            <div className="col-lg-5 intro-text">
              <h5>Introduction</h5>
            </div>
            <div className="col-lg-7 my-list">
              <ul>
                {Intro.map((key, a) => (
                  <div key={a} className="list">
                    <li>{Intro[a].list}</li>
                  </div>
                ))}
              </ul>
            </div>
          </div>

          <div className="row intro-body ">
            <div className="col-lg-5  intro-text">
              <h5>Contact & Blogs</h5>
            </div>
            <div className="col-lg-7 my-list">
              <ul>
                <li className="text-underline">
                  Email : <span> smlife202@gmail.com</span>
                </li>
                <li>
                  Github :
                  <a href="/" target="_blank">
                    https://github.com/anaskhonprime
                  </a>
                </li>
                <li>
                  Blogs :
                  <a href="/" target="_blank">
                    https://prmblogs.tistory.com/
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row intro-body ">
            <div className="row intro-header">
              <div className="col-lg-1">
                <CodeSVG />
              </div>
              <div className="col-lg-11 main-text">
                <h4>Skills</h4>
              </div>
              <hr />
            </div>

            <div className="col-lg-5 intro-text">
              <h5>Frontend</h5>
            </div>

            <div className="col-lg-7  my-list">
              <ul>
                {frontend.map((key, a) => (
                  <div key={a} className="list">
                    <li>{frontend[a].list}</li>
                  </div>
                ))}
              </ul>
            </div>
            <div className="free-space"></div>
            <div className="col-lg-5 intro-text">
              <h5>Backend</h5>
            </div>

            <div className="col-lg-7  my-list">
              <ul>
                {beckend.map((key, a) => (
                  <div key={a} className="list">
                    <li>{beckend[a].list}</li>
                  </div>
                ))}
              </ul>
            </div>

            <div className="free-space"></div>
            <div className="col-lg-5 intro-text">
              <h5>Tools & Software</h5>
            </div>

            <div className="col-lg-7  my-list">
              <ul>
                {tools.map((key, a) => (
                  <div key={a} className="list">
                    <li>{tools[a].list}</li>
                  </div>
                ))}
              </ul>
            </div>
          </div>

          <div className="row intro-body">
            <div className="row intro-header">
              <div className="col-lg-1">
                <CodeSVG />
              </div>
              <div className="col-lg-11 main-text">
                <h4>Work Experience & Projects</h4>
              </div>
              <hr />
            </div>
            <div className="col-lg-5 intro-text">
              <h5>Introduction</h5>
            </div>
            <div className="col-lg-7 my-list">
              <ul>
                {Intro.map((key, a) => (
                  <div key={a} className="list">
                    <li>{Intro[a].list}</li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;

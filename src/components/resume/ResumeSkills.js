import React from "react";
import { beckend, frontend, tools } from "../../data/resume.js";
import "../../style/resume.css";
import { CodeSVG } from "../Svg/SvgIcons.js";

function ResumeSkills() {
  return (
    <div className="row intro-body ">
      <div className="row intro-header">
        <div className="col-lg-1 big-svg">
          <CodeSVG />
        </div>
        <div className="col-lg-11 main-text">
          <h4>Skills</h4>
        </div>
        <hr />
      </div>
      <div className="col-lg-6 intro-text">
        <h5>Frontend</h5>
      </div>
      <div className="col-lg-6 my-list ">
        <ul>
          {frontend.map((key, a) => (
            <div key={a} className="list">
              <li>{frontend[a].list}</li>
            </div>
          ))}
        </ul>
      </div>
      <div className="free-space"></div>
      <div className="col-lg-6 intro-text">
        <h5>Backend</h5>
      </div>
      <div className="col-lg-6  my-list">
        <ul>
          {beckend.map((key, a) => (
            <div key={a} className="list">
              <li>{beckend[a].list}</li>
            </div>
          ))}
        </ul>
      </div>
      <div className="free-space"></div>
      <div className="col-lg-6 intro-text">
        <h5>Tools & Software</h5>
      </div>
      <div className="col-lg-6  my-list">
        <ul>
          {tools.map((key, a) => (
            <div key={a} className="list">
              <li>{tools[a].list}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResumeSkills;

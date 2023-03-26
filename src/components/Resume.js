import React from "react";

import ResumeHeader from "./resume/ResumeHeader";
import ResumeAbout from "./resume/ResumeAbout";
import ResumeSkills from "./resume/ResumeSkills";
import ResumeWorks from "./resume/ResumeWorks";

import "../style/resume.css";
import { resumeHeader} from "../data/resume.js";

function Resume() {
  return (
    <div className="resume-body">
      <ResumeHeader />
      <div className="row resume-3">
        <div className="resume-content">
          <div className="container">
            <img src={resumeHeader.profile} className="main-img" alt="" />
            <h3 className="greeting">{resumeHeader.header}</h3>
          </div>
          <ResumeAbout />
          <ResumeSkills />
          <ResumeWorks />
        </div>
      </div>
    </div>
  );
}

export default Resume;

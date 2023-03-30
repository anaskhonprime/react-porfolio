import React from "react";

import ResumeHeader from "./resume/ResumeHeader";
import ResumeAbout from "./resume/ResumeAbout";
import ResumeSkills from "./resume/ResumeSkills";
import ResumeWorks from "./resume/ResumeWorks";
import ResumeExperience from "./resume/ResumeExperience";
import ResumeActivity from "./resume/ResumeActivity";

import "../style/resume.css";
import { resumeHeader } from "../data/resume.js";

function Resume() {
  return (
    <div className="resume-body">
      <ResumeHeader />
      <div className="resume-3">
        <div className="resume-content">
          <div className="head">
            <img src={resumeHeader.profile} className="main-img" alt="" />
            <h5 className="greeting">{resumeHeader.header}</h5>
          </div>
          <ResumeAbout />
          <ResumeSkills />
          <ResumeWorks />
          <ResumeExperience />
          <ResumeActivity />
        </div>
      </div>
    </div>
  );
}

export default Resume;

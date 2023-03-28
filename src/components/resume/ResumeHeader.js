import React from "react";
import { Link } from "react-router-dom";
import { resumeHeader } from "../../data/resume.js";
import "../../style/resume.css";

function ResumeHeader() {
  return (
    <>
      <div className="row resume-1">
        <div className="col-lg-7 start">
          <img src={resumeHeader.profile} className="img-small" alt="" />
          <p>{resumeHeader.header}</p>
        </div>
        <div className="col-lg-5 links">
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
    </>
  );
}

export default ResumeHeader;

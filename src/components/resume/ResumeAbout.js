import React from "react";
import { Link } from "react-router-dom";

import { Intro } from "../../data/resume.js";
import "../../style/resume.css";
import { CodeSVG } from "../Svg/SvgIcons.js";

function ResumeAbout() {
  return (
    <>
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
        <div className="col-lg-6 intro-text">
          <h5>Introduction</h5>
        </div>
        <div className="col-lg-6 my-list">
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
        <div className="col-lg-6  intro-text">
          <h5>Contact & Blogs</h5>
        </div>
        <div className="col-lg-6 my-list">
          <ul>
            <li className="text-underline">
              Personal : 만 25세, 비자타입: 구직비자(D-10)
            </li>
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
    </>
  );
}

export default ResumeAbout;

import React from "react";
import { Intro } from "../../data/resume.js";
import { CodeSVG } from "../Svg/SvgIcons.js";

import "../../style/resume.css";

function ResumeAbout() {
  return (
    <>
      <div className="row intro-body">
        <div className="row intro-header">
          <div className="col-lg-1 big-svg">
            <CodeSVG />
          </div>
          <div className="col-lg-11 main-text">
            <h4>About Me</h4>
          </div>
          <hr className="line" />
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
        <div className="col-lg-6 intro-text">
          <h5 className="list-group">Contact & Blogs</h5>
        </div>
        <div className="col-lg-6 my-list">
          <ul>
            <li className="text-underline">
              Personal : 만 25세, ENFJ, 비자타입: D-10
            </li>
            <li className="text-underline">
              Email : <span> smlife202@gmail.com</span>
            </li>
            <li>
              Github :
              <a href="https://github.com/anaskhonprime" target="_blank">
                github.com/anaskhonprime
              </a>
            </li>
            <li>
              Blogs :
              <a href="https://prmblogs.tistory.com/" target="_blank">
                prmblogs.tistory.com/
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ResumeAbout;

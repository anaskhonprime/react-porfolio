import React from "react";
import { Link } from "react-router-dom";

import { exp1, exp2, exp3, exp4 } from "../../data/resume.js";
import "../../style/resume.css";
import { CodeSVG, HashSVG } from "../Svg/SvgIcons.js";

function ResumeSkills() {
  return (
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

      {/* 활동 내용 */}

      <div className="col-lg-6  intro-text">
        <h5>{exp1.name}</h5>
        <div className="works-time my-list mt-5">
          <ul className="ul-list">
            <li>
              방문 :
              <a href={exp1.live} target="_blank">
                {exp1.live}
              </a>
            </li>
            <li>
              Github :
              <a href={exp1.code} target="_blank">
                {exp1.code}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6 my-list">
        <div className="works-intro">
          <HashSVG />
          <p>프로젝트 내용</p>
        </div>
        <ul>
          <div className="list">
            <li>{exp1.content}</li>
          </div>
        </ul>
        <div className="works-intro mt-5">
          <HashSVG />
          <p>기술스택</p>
        </div>
        <ul>
          <div className="list">
            <li>{exp1.stack}</li>
            <li>{exp1.stack1}</li>
          </div>
        </ul>
        <div className="works-intro mt-5">
          <HashSVG />
          <p>프로젝트 특징</p>
        </div>
        <ul>
          <div className="list">
            <li>{exp1.special}</li>
          </div>
        </ul>
      </div>

      <hr className="my-5" />

      {/* 활동 내용 */}

      <div className="col-lg-6  intro-text">
        <h5>{exp2.name}</h5>
        <div className="works-time my-list mt-5">
          <ul className="ul-list">
            <li>
              방문 :
              <a href={exp2.live} target="_blank">
                {exp2.live}
              </a>
            </li>
            <li>
              Github :
              <a href={exp2.code} target="_blank">
                {exp2.code}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6 my-list">
        <div className="works-intro">
          <HashSVG />
          <p>프로젝트 내용</p>
        </div>
        <ul>
          <div className="list">
            <li>{exp2.content}</li>
          </div>
        </ul>
        <div className="works-intro mt-5">
          <HashSVG />
          <p>기술스택</p>
        </div>
        <ul>
          <div className="list">
            <li>{exp2.stack}</li>
            <li>{exp2.stack1}</li>
          </div>
        </ul>
        <div className="works-intro mt-5">
          <HashSVG />
          <p>프로젝트 특징</p>
        </div>
        <ul>
          <div className="list">
            <li>{exp2.special}</li>
          </div>
        </ul>
      </div>

      <hr className="my-5" />

      {/* 활동 내용 */}

      <div className="col-lg-6  intro-text">
        <h5>{exp3.name}</h5>
        <div className="works-time my-list mt-5">
          <ul className="ul-list">
            <li>
              방문 :
              <a href={exp3.live} target="_blank">
                {exp3.live}
              </a>
            </li>
            <li>
              Github :
              <a href={exp3.code} target="_blank">
                {exp3.code}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6 my-list">
        <div className="works-intro">
          <HashSVG />
          <p>프로젝트 내용</p>
        </div>
        <ul>
          <div className="list">
            <li>{exp3.content}</li>
          </div>
        </ul>
        <div className="works-intro mt-5">
          <HashSVG />
          <p>기술스택</p>
        </div>
        <ul>
          <div className="list">
            <li>{exp3.stack}</li>
            <li>{exp3.stack1}</li>
          </div>
        </ul>
        <div className="works-intro mt-5">
          <HashSVG />
          <p>프로젝트 특징</p>
        </div>
        <ul>
          <div className="list">
            <li>{exp3.special}</li>
          </div>
        </ul>
      </div>

      <hr className="my-5" />

      {/* 활동 내용 */}

      <div className="col-lg-6  intro-text">
        <h5>{exp4.name}</h5>
        <div className="works-time my-list mt-5">
          <ul className="ul-list">
            <li>
              포스터 :
              <a href={exp4.live1} target="_blank">
                International Day
              </a>
            </li>
            <li>
              이벤트 :
              <a href={exp4.live2} target="_blank">
                설날 이벤트
              </a>
            </li>
            <li>
              홍보물 :
              <a href={exp4.live3} target="_blank">
                개인별 이동장치
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6 my-list">
        <div className="works-intro">
          <HashSVG />
          <p>프로젝트 내용</p>
        </div>
        <ul>
          <div className="list">
            <li>{exp4.content}</li>
            <li>{exp4.stack}</li>
          </div>
        </ul>
        
        <div className="works-intro mt-5">
          <HashSVG />
          <p>프로젝트 특징</p>
        </div>
        <ul>
          <div className="list">
            <li>{exp4.special}</li>
          </div>
        </ul>
      </div>

      {/* 활동 내용 */}
    </div>
  );
}

export default ResumeSkills;

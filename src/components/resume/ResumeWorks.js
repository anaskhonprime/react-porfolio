import React from "react";
import { work1, work2, work3 } from "../../data/resume.js";
import "../../style/resume.css";
import { CodeSVG, TimeSVG, StarSVG, HashSVG } from "../Svg/SvgIcons.js";

function ResumeExprerience() {
  return (
    <>
      <div className="row intro-body">
        <div className="row intro-header">
          <div className="col-lg-1 big-svg">
            <CodeSVG />
          </div>
          <div className="col-lg-11 main-text">
            <h4>Work Experience & Projects</h4>
          </div>
          <hr />
        </div>
        {/* 활동 내용 */}
        <div className="col-lg-6  intro-text">
          <h5>{work1.place}</h5>
          <div className="works-time">
            <TimeSVG />
            <p>{work1.time}</p>
          </div>
          <div className="works-job">
            <StarSVG />
            <p>
              {work1.job} | <span>3개월</span>
            </p>
          </div>
        </div>
        <div className="col-lg-6 my-list">
          <div className="activity-container">
            <div className="works-intro">
              <HashSVG />
              <p>활동 내용</p>
            </div>
            <ul>
              <div className="list">
                <li>{work1.experience1}</li>
                <li>{work1.experience2}</li>
                <li>{work1.experience3}</li>
              </div>
            </ul>
          </div>
          <div className="activity-container">
            <div className="works-intro">
              <HashSVG />
              <p>활동 특징</p>
            </div>
            <ul>
              <div className="list">
                <li>{work1.point}</li>
                <li>{work1.point1}</li>
              </div>
            </ul>
          </div>
          <div className="activity-container">
            <div className="works-intro ">
              <HashSVG />
              <p>활동 후기</p>
            </div>
            <ul>
              <div className="list">
                <li>{work1.review}</li>
              </div>
            </ul>
          </div>
          <div className="activity-container">
            <div className="works-intro">
              <HashSVG />
              <p>아쉬운점</p>
            </div>
            <ul>
              <div className="list">
                <li>{work1.unfortunate}</li>
              </div>
            </ul>
          </div>
        </div>
        <hr className="my-5" />
        {/* 활동 내용 */}
        <div className="col-lg-6 intro-text">
          <h5>{work2.place}</h5>
          <div className="works-time">
            <TimeSVG />
            <p>{work2.time}</p>
          </div>
          <div className="works-job">
            <StarSVG />
            <p>
              {work2.job} | <span>12개월</span>
            </p>
          </div>
        </div>
        <div className="col-lg-6 my-list">
          <div className="activity-container">
            <div className="works-intro">
              <HashSVG />
              <p>활동 내용</p>
            </div>
            <ul>
              <div className="list">
                <li>{work2.experience1}</li>
                <li>{work2.experience2}</li>
                <li>{work2.experience3}</li>
              </div>
            </ul>
          </div>
          <div className="activity-container">
            <div className="works-intro">
              <HashSVG />
              <p>활동 특징</p>
            </div>
            <ul>
              <div className="list">
                <li>{work2.point}</li>
                <li>{work2.point1}</li>
              </div>
            </ul>
          </div>
          <div className="activity-container">
            <div className="works-intro">
              <HashSVG />
              <p>활동 후기</p>
            </div>
            <ul>
              <div className="list">
                <li>{work2.review}</li>
              </div>
            </ul>
          </div>
          <div className="activity-container">
            <div className="works-intro">
              <HashSVG />
              <p>아쉬운점</p>
            </div>
            <ul>
              <div className="list">
                <li>{work2.unfortunate}</li>
              </div>
            </ul>
          </div>
        </div>
        <hr className="my-5" />
        {/* 활동 내용 */}
        <div className="col-lg-6  intro-text">
          <h5>{work3.place}</h5>
          <div className="works-time">
            <TimeSVG />
            <p>{work3.time}</p>
          </div>
          <div className="works-job">
            <StarSVG />
            <p>
              {work3.job} | <span>9개월</span>
            </p>
          </div>
        </div>
        <div className="col-lg-6 my-list">
          <div className="activity-container">
            <div className="works-intro">
              <HashSVG />
              <p>활동 내용</p>
            </div>
            <ul>
              <div className="list">
                <li>{work3.experience1}</li>
                <li>{work3.experience2}</li>
                <li>{work3.experience3}</li>
              </div>
            </ul>
          </div>
          <div className="activity-container">
            <div className="works-intro ">
              <HashSVG />
              <p>활동 특징</p>
            </div>
            <ul>
              <div className="list">
                <li>{work3.point}</li>
                <li>{work3.point1}</li>
              </div>
            </ul>
          </div>
          <div className="activity-container">
            <div className="works-intro ">
              <HashSVG />
              <p>활동 후기</p>
            </div>
            <ul>
              <div className="list">
                <li>{work3.review}</li>
              </div>
            </ul>
          </div>
          <div className="activity-container">
            <div className="works-intro">
              <HashSVG />
              <p>아쉬운점</p>
            </div>
            <ul>
              <div className="list">
                <li>{work3.unfortunate}</li>
              </div>
            </ul>
          </div>
        </div>
        {/* 활동 내용 */}
      </div>
    </>
  );
}

export default ResumeExprerience;

import React from "react";
import { Link } from "react-router-dom";
import { activities } from "../../data/resume.js";
import "../../style/resume.css";
import { CodeSVG, HashSVG, TimeSVG, StarSVG } from "../Svg/SvgIcons.js";


const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


function ResumeActivity() {
  return (
    <div className="row intro-body">
      <div className="row intro-header">
        <div className="col-lg-1">
          <CodeSVG />
        </div>
        <div className="col-lg-11 main-text">
          <h4>Education & Activities</h4>
        </div>
        <hr />
      </div>

      {/* 활동 내용 */}

      <div className="col-lg-6  intro-text">
        <h5>Education</h5>
        <div className="works-time my-list"></div>
      </div>
      <div className="col-lg-6 my-list">
        <div className="works-intro">
          <StarSVG />
          <p>{activities[0].name}</p>
        </div>
        <ul>
          <div className="list">
            <li>{activities[0].time}</li>
          </div>
          <div className="list">
            <li>{activities[0].text}</li>
          </div>
          <div className="list">
            <li>{activities[0].text1}</li>
          </div>
        </ul>

        <div className="works-intro mt-4">
          <StarSVG />
          <p>{activities[1].name}</p>
        </div>
        <ul>
          <div className="list">
            <li>{activities[1].text}</li>
          </div>
          <div className="list">
            <li>{activities[1].text1}</li>
          </div>
        </ul>
      </div>

      <div className="col-lg-6 mt-5 intro-text">
        <h5>Activities</h5>
        <div className="works-time my-list"></div>
      </div>
      <div className="col-lg-6 my-list mt-5">
        <div className="works-intro">
          <StarSVG />
          <p>{activities[2].name}</p>
        </div>
        <ul>
          <div className="list">
            <li>{activities[2].time}</li>
          </div>
          <div className="list">
            <li>{activities[2].text}</li>
          </div>
          <div className="list">
            <li>{activities[2].text1}</li>
          </div>
        </ul>

        <div className="works-intro mt-4">
          <StarSVG />
          <p>{activities[3].name}</p>
        </div>
        <ul>
          <div className="list">
            <li>{activities[3].time}</li>
          </div>
          <div className="list">
            <li>{activities[3].text}</li>
          </div>
          <div className="list">
            <li>{activities[3].text1}</li>
          </div>
        </ul>

        <div className="works-intro mt-4">
          <StarSVG />
          <p>{activities[4].name}</p>
        </div>
        <ul>
          <div className="list">
            <li>{activities[4].text}</li>
          </div>
          <div className="list">
            <li>{activities[4].text1}</li>
          </div>
        </ul>
      </div>
      <div className="my-5"></div>

      <div className="row bottom">
        <div className="special-buttons">
          <button onClick={goToTop}>Top</button>
        </div>
      </div>
    </div>
  );
}

export default ResumeActivity;

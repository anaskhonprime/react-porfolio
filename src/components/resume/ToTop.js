import React from "react";
import "../../style/resume.css";

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function ToTop(){
    <div className="row bottom">
      <div className="special-buttons">
        <button onClick={goToTop}>Top</button>
      </div>
    </div>
}

export default ToTop;
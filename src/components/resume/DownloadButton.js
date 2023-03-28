import React from "react";

import "../../style/resume.css";

function DownloadButton() {
  return (
    <>
      <div data-tooltip="이력서" className="down-button">
        <div className="button-wrapper">
          <p className="text">Download</p>
          <span class="icon">
            <svg
              className="down-svg"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              width="2em"
              role="img"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke="currentColor"
                fill="none"></path>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}

export default DownloadButton;

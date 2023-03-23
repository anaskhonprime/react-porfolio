import React from "react";
import { Link } from "react-router-dom";

import "../style/index.css";

function Navigator() {
  return (
    <>
      <div className="navigator">
        <div className="navbar-bottom">
          <ul>
            <Link className="bottom-link" to="/">
              <li>Home</li>
            </Link>
            <Link className="bottom-link" to="/about">
              <li>About</li>
            </Link>
            <Link className="bottom-link" to="/projects">
              <li>Projects</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navigator;

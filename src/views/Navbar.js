import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SVGMode from "../components/Svg/SvgMode";

import "../style/index.css";
import { logoImg } from "../assets/assets";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="row navbar-items">
        <div className="col-lg-2">
          <img src={logoImg} className="logo-img" alt="logo" />
          <div className="menu">
            <svg
              onClick={toggleMenu}
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"></path>
            </svg>
          </div>
        </div>

          <div className="col-lg-8 navbar-body">
            <ul>
              <Link className="text-link" to="/">
                <li>Home</li>
              </Link>
              <Link className="text-link" to="/about">
                <li>About</li>
              </Link>
              <Link className="text-link" to="/projects">
                <li>Projects</li>
              </Link>
              <Link className="text-link" to="/resume">
                <li>Resume</li>
              </Link>
            </ul>
          </div>

        {openMenu ? (
          <div className="navbar-hidden">
            <ul>
              <Link className="text-link" to="/">
                <li>Home</li>
              </Link>
              <Link className="text-link" to="/about">
                <li>About</li>
              </Link>
              <Link className="text-link" to="/projects">
                <li>Projects</li>
              </Link>
              <Link className="text-link" to="/resume">
                <li>Resume</li>
              </Link>
            </ul>
          </div>
        ) : null}

        <div className="col-lg-2 responsive navbar-body ">
          <ul>
            <Link className="text-link" to="/">
              <li>En</li>
            </Link>
            <li>|</li>
            <Link className="text-link" to="/about">
              <li>Kor</li>
            </Link>
          </ul>
        </div>
        {/* <div className="col-lg-1 responsive navbar-body">
          <SVGMode />
        </div */}
      </div>
    </>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

import SVGMode from "../components/Svg/SvgMode";

import "../style/index.css"
import {logoImg} from "../assets/assets"

function Navbar() {
    return (
      <div className="row navbar-items">
        <div className="col-lg-2">
          <img src={logoImg} className="logo-img" alt="logo" />
        </div>
        <div className="col-lg-7 navbar-body">
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
           
          </ul>
        </div>

        <div className="col-lg-2 navbar-body">
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
        <div className="col-lg-1 navbar-body">
          <SVGMode />
        </div>
      </div>
    );
}

export default Navbar;


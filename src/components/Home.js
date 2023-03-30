import React from "react";

import { Link } from "react-router-dom";
import Navbar from "../views/Navbar";
import { headerImg } from "../assets/assets";
import { headerText } from "../data/home";
import { MainButton, BlogsButton } from "./Svg/MainButton";
import { Fade, Reveal } from "react-awesome-reveal";
import { fadeInDownShorter} from "../components/Animations/animation";

import "../style/home.css";


function Home() {
  return (
    <>
      <div className="home-body">
        <div className="navbar-items">
          <Navbar />
        </div>
        <div className="row header-items g-0">
          <div className="col-lg-6 header-text">
            <Reveal keyframes={fadeInDownShorter} duration={500} delay={300}>
              <h1 className="typing-demo">{headerText.header}</h1>
            </Reveal>
            <Reveal keyframes={fadeInDownShorter} duration={500} delay={500}>
              <p>{headerText.intro}</p>
            </Reveal>
            <div className="header-buttons">
              <Link className="inline-items" to="/projects">
                <MainButton />
              </Link>
              <Link className="inline-items" to="https://prmblogs.tistory.com/">
                <BlogsButton />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 header-img">
            <Fade keyframes={fadeInDownShorter} duration={500} delay={700}>
              <img className="header-image" src={headerImg} alt="" />
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

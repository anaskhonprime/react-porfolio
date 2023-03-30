import React, { useState, useEffect } from "react";
import Navbar from "../views/Navbar";
import { Link } from "react-router-dom";
import "../style/projects.css";
import { projects, filterButtons } from "../data/projects";
import { CodeButton, LinkButton } from "../components/Svg/MainButton";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter } from "../components/Animations/animation";


function Projects() {
  const [myProjects, setMyProjects] = useState(null);

  useEffect(() => {
    setMyProjects(getProjects());
  }, []);

  function getProjects() {
    const pList = projects;
    return pList;
  }

  function filterProjects(pType) {
    let filteredProject = getProjects().filter(type => type.category === pType);
    return filteredProject;
  }

  function handleFilter(e) {
    let typePro = e.target.value;
    typePro !== "all"
      ? setMyProjects(filterProjects(typePro))
      : setMyProjects(getProjects());
  }

  return (
    <div className="projects-screen">
      <div className="navbar-items">
        <Navbar />
      </div>
      <div className="row screen-1 g-0">
        <div className="col-lg-6">
          <h2>My Projects</h2>
        </div>
        <div className="col-lg-6">
          <div className="filter-container">
            {filterButtons &&
              filterButtons.map((type, index) => (
                <>
                  <button
                    className="filter-buttons"
                    key={index}
                    value={type.value}
                    onClick={handleFilter}>
                    {type.name}
                  </button>
                </>
              ))}
          </div>
        </div>
      </div>
      <div className="row screen-2 g-0">
        {myProjects &&
          myProjects.map((type, a) => (
            <div key={type.id} className="col-lg-4">
              <Reveal
                keyframes={fadeInDownShorter}
                duration={700}
                delay={100 * (a + 1)}>
                <div className="projects">
                  <img className="projects-img" src={type.image} alt="" />
                  <div className="project-content">
                    <h4 className="project-intro">{type.name}</h4>
                    <div className="pause-pink"></div>
                    <p className="project-content">{type.content}</p>
                  </div>
                </div>
                <div className="link-items">
                  <Link className="inline-items" to={type.live}>
                    <LinkButton />
                  </Link>
                  <Link className="inline-items" to={type.code}>
                    <CodeButton />
                  </Link>
                  <div className="hr-line"></div>
                </div>
              </Reveal>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Projects;

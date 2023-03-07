import React from "react";
import Navbar from "../views/Navbar";

import "../style/projects.css";
import { projects } from "../data/projects";

function Projects() {

  

  return (
    <div className="projects-screen">
      <div className="navbar-items">
        <Navbar />
      </div>
      <div className="row screen-1">
        <div className="col-lg-6">
          <h1>My Projects</h1>
        </div>
        <div className="col-lg-6">
          <div className="filter-container">
            <button className="filter-buttons">All</button>
            <button className="filter-buttons">VueJs</button>
            <button className="filter-buttons">ReactJs</button>
            <button className="filter-buttons">Blockchain</button>
          </div>
        </div>
      </div>

      <div className="row screen-2">
        {projects.map((key, a) => (
          <div key={a} className="col-lg-4">
            <div className="projects">
              <img className="projects-img" src={projects[a].image} alt="" />
              <div className="project-content">
                <h3>{projects[a].name}</h3>
                <p>{projects[a].content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

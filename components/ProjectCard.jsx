/*import React from "react";
import "../App.css";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <span className="category">{project.category}</span>
    </div>
  );
}*/









import React from "react";
import "../App.css";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <span className="project-category">{project.category}</span>
      </div>
    </div>
  );
}


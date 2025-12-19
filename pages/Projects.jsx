/*import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import "../Projects.css";



import meteoImg from "../assets/imgmeteo.jpg";
import dashboardImg from "../assets/imgdash.png";
import portfolioImg from "../assets/portfolio.jpg";



export default function Projects() {
  // Exemple de projets (tu peux plus tard les récupérer depuis une API)
  const projects = [
    {
      id: 1,
      title: "Application météo",
      description: "Une app React qui affiche la météo d'une ville en temps réel.",
      category: "Web",
      image:meteoImg,
    },
    {
      id: 2,
      title: "Dashboard Data Science",
      description: "Dashboard interactif avec graphiques en React et Chart.js.",
      category: "Data",
      image: dashboardImg,
    },
    {
      id: 3,
      title: "Portfolio personnel",
      description: "Mon portfolio avec React Router et formulaire de contact.",
      category: "Web",
      image: portfolioImg,
    },
  ];

  return (
    <div className="projects-container">
      <h2>Mes Projets</h2>
      <div className="projects-list">
        {projects.map((proj) => (
          <Link key={proj.id} to={`/project/${proj.id}`} className="link-card">
            <ProjectCard project={proj} />
          </Link>
        ))}
      </div>
    </div>
  );
}
*/








import React, { useState } from "react";
import "../Projects.css";
import ProjectCard from "../components/ProjectCard";

import meteoImg from "../assets/imgmeteo.jpg";
import dashboardImg from "../assets/imgdash.png";
import portfolioImg from "../assets/portfolio.jpg";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Application météo",
      description:
        "Une application React qui affiche la météo d'une ville en temps réel grâce à une API. Design responsive et clair.",
      category: "Web",
      image: meteoImg,
      technologies: ["React", "OpenWeather API", "CSS"],
    },
    {
      id: 2,
      title: "Dashboard Data Science",
      description:
        "Dashboard interactif pour visualiser des données statistiques avec React, Chart.js et Flask.",
      category: "Data",
      image: dashboardImg,
      technologies: ["React", "Chart.js", "Python Flask"],
    },
    {
      id: 3,
      title: "Portfolio personnel",
      description:
        "Mon portfolio créé avec React Router, animations et mode sombre. Il présente mes projets et compétences.",
      category: "Web",
      image: portfolioImg,
      technologies: ["React", "CSS", "Responsive Design"],
    },
  ];

  return (
    <div className="projects-container">
      <h2>🚀 Mes Projets</h2>
      <div className="projects-list">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="link-card"
            onClick={() => setSelectedProject(proj)}
          >
            <ProjectCard project={proj} />
          </div>
        ))}
      </div>

      {/* ✅ Modale affichée si un projet est sélectionné */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique dans la modale
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-img"
            />
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <div className="tech-list">
              {selectedProject.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

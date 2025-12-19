import React from "react";
import "../App.css";
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import mariemPhoto from "../assets/mariem.jpg";


export default function Contact() {
  // Remplace les URLs ci-dessous par tes vrais profils
  const socials = {
    facebook: "https://facebook.com/ton-profil",
    linkedin: "https://www.linkedin.com/in/ton-profil",
    github: "https://github.com/ton-profil",
    twitter: "https://twitter.com/ton-profil",
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <img
  className="profile-img-large"
  src={mariemPhoto}
  alt="Mariem - Développeuse"
/>


        <div className="profile-info">
          <h1>Hi, I'm Mariem</h1>
          <p className="subtitle">I'm a Developer 👩‍💻</p>

          <p className="contact-text">
            Je réalise des applications web modernes avec React, Node.js et les
            meilleures pratiques. N'hésite pas à me contacter ou visiter mes
            profils sociaux.
          </p>

          <div className="social-icons">
            <a
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={28} />
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>

            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>

            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}










/*
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../App.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">Mariem<span>.</span></div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>

      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
*/
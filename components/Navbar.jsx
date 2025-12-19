import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../App.css";




export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        Mariem<span>.</span>
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>

      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}















/*
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar({ isLoggedIn, onLogout }) {
  return (
    <nav className="navbar">
      <div className="nav-logo">MyPortfolio</div>
      <ul className="nav-links">
        {isLoggedIn && (
          <>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/projects">Projets</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </>
        )}
        {!isLoggedIn ? (
          <li><Link to="/login">Login</Link></li>
        ) : (
          <li>
            <button className="logout-btn" onClick={onLogout}>
              Déconnexion
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

*/

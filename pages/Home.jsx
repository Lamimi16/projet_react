import React from "react";
import "../Home.css";
import mariemimg from "../assets/mariem.jpg";

export default function Home() {
  return (
    <div className="home-container">
      <section className="intro">
        <img
          src={mariemimg}
          alt="Profil"
          className="profile-img"
        />
        <h1>Bienvenue sur mon Portfolio 👋</h1>
        <p>
          Je suis <strong>Développeur Web</strong> passionné par React, Node.js et les
          technologies modernes du web.
        </p>
      </section>

      <section className="skills">
        <h2>Mes Compétences</h2>
        <ul>
          <li>⚛️ React.js</li>
          <li>💻 JavaScript / TypeScript</li>
          <li>🎨 HTML / CSS / Tailwind</li>
          <li>🗄️ Node.js / Express</li>
          <li>🛢️ MongoDB / MySQL</li>
        </ul>
      </section>
    </div>
  );
}

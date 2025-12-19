/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "1234") {
      setIsLoggedIn(true);
      navigate("/home");
    } else {
      alert("Email ou mot de passe incorrect !");
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}
*/



/*
import React from "react";
import "../Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Bienvenue 👋</h2>
        <p>Connecte-toi pour accéder à ton espace développeur</p>

        <form className="login-form">
          <div className="form-group">
            <input type="email" placeholder="Adresse email" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Mot de passe" required />
          </div>
          <button type="submit" className="login-btn">
            Se connecter
          </button>
        </form>

        <p className="register-text">
          Pas encore de compte ? <a href="/register">Inscris-toi</a>
        </p>
      </div>
    </div>
  );
}
*/









import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login.css";

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "1234") {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true"); // ✅ Sauvegarde connexion
      navigate("/"); // ✅ Redirige vers Home
    } else {
      setError("Email ou mot de passe incorrect !");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Bienvenue 👋</h2>
        <p>Connecte-toi pour accéder à ton espace développeur</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-btn">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}

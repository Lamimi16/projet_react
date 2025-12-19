import React, { useState } from "react";
import styles from "../styles/useState.module.css"; 

export default function WeatherFormExample() {
  const [weather, setWeather] = useState({
    city: "Tunis",
    temperature: 25,
    condition: "☀️ Ensoleillé",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWeather((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetWeather = () => {
    setWeather({
      city: "Tunis",
      temperature: 25,
      condition: "☀️ Ensoleillé",
    });
  };
  

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Modifier la météo</h2>

      <form className={styles.form}>
        <input
          type="text"
          name="city"
          value={weather.city}
          onChange={handleChange}
          placeholder="Nom de la ville"
          className={styles.input}
        />

        <input
          type="number"
          name="temperature"
          value={weather.temperature}
          onChange={handleChange}
          placeholder="Température (℃)"
          className={styles.input}
        />

        <select
          name="condition"
          value={weather.condition}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="☀️ Ensoleillé">☀️ Ensoleillé</option>
          <option value="🌧️ Pluvieux">🌧️ Pluvieux</option>
          <option value="☁️ Nuageux">☁️ Nuageux</option>
          <option value="⛈️ Orageux">⛈️ Orageux</option>
        </select>

        <button
          type="button"
          onClick={resetWeather}
          className={styles.resetBtn}
        >
          Réinitialiser
        </button>
      </form>

      <div className={styles.card}>
        <h3>Ville : {weather.city}</h3>
        <p>Température : {weather.temperature}°C</p>
        <p>Condition : {weather.condition}</p>
      </div>
    </div>
  );
}

           
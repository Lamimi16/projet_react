/*import React, {useState} from 'react'
import styles from'../styles/UseState.module.css'

export default function Exemple2(){
    const [weather, setWeather]=usestate('soliel')

    const toggleWeather =() =>{
        setWeather((prev)=>(prev=='soliel'?' Pluie' : 'soliel'))
    }

    return 
    <div>
        <h1>Méteo actuelle : {weather}</h1>
        <button className={styles.btnStyle} onClick={toggleWeather}>Changer</button>
    </div>
}*/




import React, { useState } from 'react';   // ✅ majuscule ici
import styles from '../styles/UseState.module.css';

export default function Exemple2() {
  const [city, setCity] = useState('Tunis');  // ✅ même ici, majuscule

  const handleChange = () => {
    setCity('Bizerte');
  };

  return (
    <div>
      <h1>Bonjour {city}</h1>
      <button className={styles.btnStyle} onClick={handleChange}>
        Changer la ville
      </button>
    </div>
  );
}


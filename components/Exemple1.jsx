import React, {useState} from 'react'
import styles from'../styles/UseState.module.css'

export default function Exemple(){
    const[city,setCity]=useState('Tunis')

    const handleChange=()=>{
        setCity('Bizerte')
    }
    return(
        <div>
            <h1>Bonjour{city}</h1>
            <button classname={styles.btnStyle} onClick={handleChange}>
                Changer la ville
                </button>
        </div>
    )
}

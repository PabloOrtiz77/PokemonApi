import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Pokemones_module.css'

const Pokemones = () => {
  const [pokemon, setPokemon] = useState([]);

  const fetchData = async () => {
    try {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=807";
      const result = await axios.get(url);
      setPokemon(result.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const Mostrar = () => {
    fetchData();
  };

  return (
    <div className="caja">
      <button className="btn" onClick={Mostrar}>Fetch Pokemon</button>
      <ul>
        {pokemon.map((valor, index) => (
          <li key={index}>{valor.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Pokemones;

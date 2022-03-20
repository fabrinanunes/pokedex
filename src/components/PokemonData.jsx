/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function PokeData({ thisPokemon }) {
  const [onePokemon, setOnePokemon] = useState({});

  const getPokemon = (url) => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setOnePokemon(res.data);
      })
      .catch((err) => {
        //   console.log(err);
      });
  };

  useEffect(() => {
    getPokemon(thisPokemon.url);
  }, []);

  // transform pokemon ID to 3 digits
  if (onePokemon.id < 100) {
    onePokemon.id = String(onePokemon.id).padStart(3, '0');
  }

  //   onePokemon.name =
  //     onePokemon.name[0].toUpperCase() + onePokemon.name.substr(1);

  return (
    <div className="pokemonCard">
      <p id="pokemonId">#{onePokemon.id}</p>
      <img
        src={onePokemon.sprites.other.dream_world.front_default}
        alt={onePokemon.name}
      />
      <h1>{onePokemon.name}</h1>
      <div className="pokemonTypes">
        {onePokemon.types.map((type) => (
          <span
            key={type.slot}
            className={`pokemonType ${type.type.name}`}
            data-id={type.type.name}
          >
            {type.type.name}
          </span>
        ))}
      </div>
      <span>{onePokemon.weight} kg</span>
    </div>
  );
}

export default PokeData;

/* eslint-disable react/prop-types */
import React from 'react';

function PokeData({ thisPokemon: _thisPokemon }) {
  const thisPokemon = { ..._thisPokemon };
  // transform pokemon ID to 3 digits
  if (thisPokemon.id < 100) {
    thisPokemon.id = String(thisPokemon.id).padStart(3, '0');
  }

  //   thisPokemon.name =
  //     thisPokemon.name[0].toUpperCase() + thisPokemon.name.substr(1);

  return (
    <>
      <p id="pokemonId">#{thisPokemon.id}</p>
      <img
        src={thisPokemon.sprites.other.dream_world.front_default}
        alt={thisPokemon.name}
      />
      <h1>{thisPokemon.name}</h1>
      <div className="pokemonTypes">
        {thisPokemon.types.map((type) => (
          <span
            key={type.slot}
            className={`pokemonType ${type.type.name}`}
            data-id={type.type.name}
          >
            {type.type.name}
          </span>
        ))}
      </div>
      <span>{thisPokemon.weight / 10} kg</span>
    </>
  );
}

export default PokeData;

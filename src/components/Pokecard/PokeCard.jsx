/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */

import React from 'react';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import PokeCardDetails from '../pokecarddetails/PokeCardDetails';

import './style.css';

function PokeCards({ pokemon }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const firstColor = pokemon.types[0].type.name;
  const secondColor = (pokemon.types[1] || pokemon.types[0]).type.name;

  // transform pokemon ID to 3 digits
  if (pokemon.id < 100) {
    pokemon.id = String(pokemon.id).padStart(3, '0');
  }

  return (
    <>
      <div
        className="pokemonCard"
        style={{
          background: `linear-gradient(to bottom right, var(--${firstColor}) 33%, var(--${secondColor}) 70%)`,
        }}
      >
        <div className="pokemonCardHeader">
          <span className="pokemonId">#{pokemon.id}</span>
          <OpenInFullIcon id="openCardIcon" onClick={handleOpen} />
        </div>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
        <h1>{pokemon.name}</h1>
        <div className="pokemonTypes">
          {pokemon.types.map((type) => (
            <span
              key={type.slot}
              className={`pokemonType ${type.type.name}`}
              data-id={type.type.name}
            >
              {type.type.name}
            </span>
          ))}
        </div>
        <span>{pokemon.weight / 10} kg</span>
      </div>
      <PokeCardDetails
        pokemon={pokemon}
        visibility={open}
        setVisibility={setOpen}
      />
    </>
  );
}
export default PokeCards;

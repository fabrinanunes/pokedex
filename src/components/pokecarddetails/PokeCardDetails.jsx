/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */

import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './style.css';

function PokeCardDetails({ pokemon, visibility = false, setVisibility }) {
  const handleClose = () => setVisibility(false);

  const firstColor = pokemon.types[0].type.name;
  const secondColor = (pokemon.types[1] || pokemon.types[0]).type.name;

  // transform pokemon ID to 3 digits
  if (pokemon.id < 100) {
    pokemon.id = String(pokemon.id).padStart(3, '0');
  }

  return (
    <Modal
      open={visibility}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        style={{
          background: `linear-gradient(to bottom right, var(--${firstColor}) 33%, var(--${secondColor}) 70%)`,
        }}
        className="pokemonCardInfo"
      >
        <h1>{pokemon.name}</h1>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
        <div className="pokemonData">
          <div
            className="abilitiesInfo"
            style={{
              display: 'block',
            }}
          >
            <h2
              style={{
                display: 'block',
                width: '100%',
              }}
            >
              Abilites
            </h2>
            {pokemon.abilities.map((ability) => (
              <span
                key={ability.ability.slot}
                data-id={ability.ability.name}
                className="abilities"
              >
                {ability.ability.name}
              </span>
            ))}
          </div>
          <div className="statsInfo">
            <h2>Stats</h2>
            {pokemon.stats.map((stat) => (
              <div className="statsData">
                <span
                  key={stat.stat.name}
                  data-id={stat.stat.name}
                  className="stats"
                >
                  {stat.stat.name}
                </span>
                <span
                  key={stat.base_stat}
                  data-id={stat.base_state}
                  className="statsValue"
                >
                  {stat.base_stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default PokeCardDetails;

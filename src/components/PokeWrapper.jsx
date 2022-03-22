/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import React from 'react';
import PokeCard from './PokeCard';

function Pokecard({ pokemon }) {
  return (
    <section className="pokemonWrapper">
      {pokemon.map((item) => (
        <PokeCard pokemon={item} />
      ))}
    </section>
  );
}

export default Pokecard;

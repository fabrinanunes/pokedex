/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokeCard from './PokeCard';

function Pokecard() {
  const [pokemon, setPokemon] = useState([
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  ]);

  const listPokemonPerPage = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then((response) => {
        // console.log(response);
        setPokemon(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    listPokemonPerPage();
  }, []);

  return (
    <>
      <section className="pokemonWrapper">
        <PokeCard pokemon={pokemon} />
      </section>
      <footer>
        <span>Rodapé</span>
      </footer>
    </>
  );
}

export default Pokecard;

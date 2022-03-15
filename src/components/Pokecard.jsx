/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

function Pokecard() {
  const [pokemons, setPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    'https://pokeapi.co/api/v2/pokemon/?limit=20'
  );

  async function getPokemons() {
    const res = await fetch(loadMore);
    const data = await res.json();

    function getPokemonData(result) {
      result.forEach(async (pokemon) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const pokemonData = await response.json();

        setPokemons((currentList) => [...currentList, pokemonData]);
      });
    }
    getPokemonData(data.results);
  }

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <section className="pokemonWrapper">
        {pokemons.map((pokemon) => (
          <li key={pokemon.id} className="pokemonCard">
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
            <div className="pokemonDescription">
              <span>#00{pokemon.id}</span>
              <h1>{pokemon.name}</h1>
              <div className="pokemonTypes">
                {pokemon.types.map((type) => (
                  <span
                    key={type.slot}
                    className="pokemonType"
                    data-id={type.type.name}
                  >
                    <span>{type.type.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </section>
      <footer>
        <span>Rodapé</span>
      </footer>
    </>
  );
}

export default Pokecard;

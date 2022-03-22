/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SearchBar({ setPokemon, originalPokemon, currentPokemon }) {
  const [pokemonType, setPokemonTypes] = useState([]);
  const pokeTypeApi = 'https://pokeapi.co/api/v2/type/';

  const getTypes = async () => {
    await axios.get(pokeTypeApi).then((res) => {
      setPokemonTypes(res.data.results);
    });
  };

  useEffect(() => {
    getTypes();
  }, []);

  const filterPokemonByTypes = (pokemonType) => {
    if (pokemonType === 'allTypes') {
      setPokemon(originalPokemon);
      return;
    }

    const filteredPokemon = originalPokemon.filter((pokemon) =>
      pokemon.types.some((item) => item.type.name === pokemonType)
    );
    setPokemon(filteredPokemon);
  };

  const filterPokemonByName = (pokemonName) => {
    if (!pokemonName) {
      setPokemon(originalPokemon);
      return;
    }

    const filteredPokemon = originalPokemon.filter(
      (pokemon) => pokemon.name.indexOf(pokemonName.toLowerCase()) !== -1
    );
    setPokemon(filteredPokemon);
  };

  const sortPokemon = (sortType) => {
    const sortedPokemon = [...currentPokemon].sort((a, b) => {
      if (sortType === 'name') {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      }

      return Number(a.id) - Number(b.id);
    });
    setPokemon(sortedPokemon);
  };

  return (
    <div id="filterSearch">
      <label htmlFor="pokemonName">
        Name
        <input
          type="search"
          id="pokemonName"
          name="pokemonName"
          style={{ paddingLeft: '.5rem' }}
          onInput={(e) => {
            filterPokemonByName(e.currentTarget.value);
          }}
        />
      </label>
      <label htmlFor="pokemonType">
        Type
        <select
          id="pokemonType"
          name="pokemonType"
          onChange={(e) => filterPokemonByTypes(e.currentTarget.value)}
        >
          <option value="allTypes">all</option>
          {pokemonType.map((type) => (
            <option value={type.name} key={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="sortBy">
        Sort
        <select
          id="sortBy"
          name="sortBy"
          onChange={(e) => sortPokemon(e.currentTarget.value)}
        >
          <option value="id">ID</option>
          <option value="name">Name</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;

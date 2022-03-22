import axios from 'axios';

const getPokemonData = async (pokemonUrl) => {
  const result = await axios.get(pokemonUrl).then((response) => response.data);

  return result;
};

const getAllPokemon = async () => {
  const results = await axios
    .get('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then((response) => response.data.results);

  const pokemonDataPromises = results.map((pokemon) =>
    getPokemonData(pokemon.url)
  );

  const pokemonDataResolve = await Promise.all(pokemonDataPromises);

  return pokemonDataResolve;
};

export { getAllPokemon };

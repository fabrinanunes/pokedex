/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PokeWrapper from './components/PokeWrapper';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { getAllPokemon } from './functions/getPokemons';
import './App.css';
import Loading from './components/Loading';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [newPokemon, setNewPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const listPokemon = await getAllPokemon();
    setPokemon(listPokemon);
    setNewPokemon(listPokemon);
    setLoading(false);
  }, []);

  return (
    <>
      <Loading visible={loading} />
      <nav id="navbar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="Pokemon Logo"
          id="pokemonLogo"
        />
      </nav>
      <SearchBar
        setPokemon={setNewPokemon}
        originalPokemon={pokemon}
        currentPokemon={newPokemon}
      />
      <PokeWrapper pokemon={newPokemon} />
      <Footer />
    </>
  );
}

export default App;

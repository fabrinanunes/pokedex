/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PokeWrapper from './components/pokewrapper/PokeWrapper.jsx';
import Footer from './components/Footer/Footer';
import SearchBar from './components/searchbar/SearchBar';
import { getAllPokemon } from './functions/getPokemons';
import './App.css';
import Loading from './components/Loading/Loading';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [newPokemon, setNewPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [btnArrowToTopVisible, setBtnArrowToTopVisible] = useState(false);

  useEffect(async () => {
    const listPokemon = await getAllPokemon();
    setPokemon(listPokemon);
    setNewPokemon(listPokemon);
    setLoading(false);
  }, []);

  window.onscroll = (e) => {
    setBtnArrowToTopVisible(scrollY >= 600);
  };

  return (
    <>
      <Loading visible={loading} />
      <nav id="navbar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="Pokemon Logo"
          id="pokemonLogo"
        />
        <p>
          by{' '}
          <a
            href="https://linkedin.com/in/fabrinanunes"
            target="_blank"
            rel="noreferrer"
          >
            Fabrina Nunes
          </a>
        </p>
      </nav>
      <SearchBar
        setPokemon={setNewPokemon}
        originalPokemon={pokemon}
        currentPokemon={newPokemon}
      />
      <PokeWrapper
        pokemon={newPokemon}
        btnArrowToTopVisible={btnArrowToTopVisible}
      />
      <Footer />
    </>
  );
}

export default App;

/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PokeWrapper from './components/PokeWrapper.jsx';
import './App.css';

function App() {
  return (
    <>
      <nav id="navbar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="Pokemon Logo"
          id="pokemonLogo"
        />
      </nav>
      <div id="filterSearch">
        <label htmlFor="pokemonName">
          Name
          <input type="search" id="pokemonName" name="pokemonName" />
        </label>
        <label htmlFor="pokemonType">
          Type
          <select id="pokemonType" name="pokemonType">
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
          </select>
        </label>
        <label htmlFor="sortBy">
          Sort
          <select id="sortBy" name="sortBy">
            <option value="id">ID</option>
            <option value="name">Name</option>
          </select>
        </label>
      </div>
      <PokeWrapper />
    </>
  );
}

export default App;

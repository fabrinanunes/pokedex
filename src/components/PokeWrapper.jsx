/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PokeCard from './PokeCard';

function PokeWrapper({ pokemon, btnArrowToTopVisible }) {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className="pokemonWrapper">
        {pokemon.map((item) => (
          <PokeCard pokemon={item} />
        ))}
      </section>
      <button
        type="button"
        className="arrowToTop"
        onClick={handleClick}
        hidden={!btnArrowToTopVisible}
      >
        <ArrowForwardIosIcon />
      </button>
    </>
  );
}

export default PokeWrapper;

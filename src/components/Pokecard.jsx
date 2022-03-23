/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
/* eslint-disable prettier/prettier */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

import React from 'react';
import PokeData from './PokemonData';

const PokeCard = ({pokemon}) => {
   const firstColor = pokemon.types[0].type.name;
   const secondColor = (pokemon.types[1] || pokemon.types[0]).type.name

   return(
      <div className="pokemonCard" style={{
         background: `linear-gradient(to bottom right, var(--${firstColor}) 10%, var(--${secondColor}) 100%)`
      }}>
         <PokeData thisPokemon={pokemon} />
      </div>
   )
}

export default PokeCard;

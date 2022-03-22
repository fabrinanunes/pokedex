/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
/* eslint-disable prettier/prettier */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

import React from 'react';
import PokeData from './PokemonData';

const PokeCard = ({pokemon}) => {

   return(
      <PokeData thisPokemon={pokemon} />
   )
}

export default PokeCard;

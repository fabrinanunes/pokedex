/* eslint-disable react/prop-types */
import React from 'react';

function Loading({ visible }) {
  return (
    <div className={`loading ${visible ? '' : 'hidden'}`}>
      <div>
        <img src="pokeball.svg" alt="pokeball Icon" />
      </div>
    </div>
  );
}

export default Loading;

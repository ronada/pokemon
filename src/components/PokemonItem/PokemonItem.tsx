import React from 'react';
import pokemon from '../../pokemon.png';
import "./PokemonItem.scss"

export const PokemonItem:React.FC = () => {
    return (
      <div className="item">
        <img src={pokemon} alt="img" />
        <h2>Pokemon name here</h2>
      </div>
    );
}
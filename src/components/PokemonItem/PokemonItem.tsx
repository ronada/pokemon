import React from 'react';
import Pokemon from '../../models/Pokemon';
import pokemonImg from '../../pokemon.png';
import "./PokemonItem.scss"

export const PokemonItem:React.FC<{item: Pokemon}> = (props) => {
    return (
      <div className="item">
        <img src={pokemonImg} alt="img" />
        <h2>Pokemon name here</h2>
      </div>
    );
}
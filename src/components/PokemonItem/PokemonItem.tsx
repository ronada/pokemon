import React from 'react';
import Pokemon from '../../models/Pokemon';
import pokemonImg from '../../pokemon.png';
import "./PokemonItem.scss"

export const PokemonItem:React.FC<{item: Pokemon}> = (props) => {
    return (
      <div className="item">
        <img src={props.item.sprites.front_default ? props.item.sprites.front_default : ""} alt="img" />
        <h2>{props.item?.name}</h2>
      </div>
    );
}
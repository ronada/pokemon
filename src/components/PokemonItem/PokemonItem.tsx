import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Pokemon, { Generic } from '../../models/Pokemon';
import pokemonImg from '../../pokemon.png';
import "./PokemonItem.scss"

export const PokemonItem:React.FC<{item: Generic}> = (props) => {
  const navigate = useNavigate();
  function goToDetailsPage(){
    navigate(`${props.item.url}`);
  }
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/${props.item.url}.png`
  return (
    <div className="item" onClick={goToDetailsPage}>
        <img src={url ? url : ""} alt={props.item.name} />
        <h2>{props.item?.name}</h2>
      </div>
    );
}
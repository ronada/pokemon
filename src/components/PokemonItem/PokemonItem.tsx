import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Pokemon from '../../models/Pokemon';
import pokemonImg from '../../pokemon.png';
import "./PokemonItem.scss"

export const PokemonItem:React.FC<{item: Pokemon}> = (props) => {
  const navigate = useNavigate();
  function goToDetailsPage(){
    navigate(`pokemons/${props.item.id}`);
  }
  return (
    <div className="item" onClick={goToDetailsPage}>
        <img src={props.item.sprites.front_default ? props.item.sprites.front_default : ""} alt="img" />
        <h2>{props.item?.name}</h2>
      </div>
    );
}
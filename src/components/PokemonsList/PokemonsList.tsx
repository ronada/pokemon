import React from 'react';
import { PokemonItem } from '../PokemonItem/PokemonItem';

export default function PokemonsList():JSX.Element {
    return (
      <div className="items-wrapper">
        <div className="items-title">
          <h1>All Pokemons</h1>
        </div>
        <PokemonItem />
        <PokemonItem />
        <PokemonItem />
      </div>
    );
  }
  
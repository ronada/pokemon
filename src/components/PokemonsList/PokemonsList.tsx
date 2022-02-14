import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import Pokemon from '../../models/Pokemon';
import PokemonService from '../../services/PokemonService';
import { PokemonItem } from '../PokemonItem/PokemonItem';

export default function PokemonsList():JSX.Element {
  const limit:number = 16;
  const offset:number = 10
  const [currentItems, setCurrentItems] = useState<Pokemon[]>([]);

  useEffect(() => {
    getAllPokemons(limit, offset)
  }, []);

  const getAllPokemons = (limit: number, offset: number) => {
    PokemonService.getAll(limit, offset)
      .then((response: AxiosResponse) => {
        console.log("res", response)
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  
  return (
    <div className="items-wrapper">
      <div className="items-title">
        <h1>All Pokemons</h1>
      </div>
      {
        currentItems.length>0 && currentItems.map(item => {
          return <PokemonItem item={item} key={item.name}/>
        })
      }
    </div>
  );
}
  
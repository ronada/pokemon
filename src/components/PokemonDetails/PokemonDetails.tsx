import React, { Component, useEffect, useState } from 'react';
import Pokemon from '../../models/Pokemon';
import axios from '../../configs/HttpRequest';
import './PokemonDetails.scss'
import { useParams } from 'react-router-dom';
import PokemonService from '../../services/PokemonService';
import { AxiosResponse } from 'axios';

type PokemonDetailsParams = {
  id: string;
};

export default function PokemonDetails():JSX.Element {
  const {id} = useParams<PokemonDetailsParams>()
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);

  useEffect(() => {
    console.log("effect 1")
    if(id !== undefined){
      getPokemonDetails(Number(id))
    }
  }, []);

  const getPokemonDetails = (pokemonId: number):void => {
    PokemonService.get(`pokemon/${pokemonId}`)
      .then((response: AxiosResponse) => {
        console.log("res-1", response)
        setPokemonData(response.data)
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  //In this page was neede to create a reusable component for Table, but for time reasons was not possible.
  //Also for Moves are a lot of data in some cases, and using pagination will be good.

  return (
    <div className="details-wrapper">
      <div className="item-details">
        <img src={pokemonData?.sprites?.back_default ? pokemonData?.sprites?.back_default : ""} alt="img" />
        <h2><strong>Name: </strong>{pokemonData?.name}</h2>
        <p><strong> Species: </strong>{pokemonData?.species.name}</p>

        <p><strong> Stats: </strong></p>
        <table>
          <tr>
            <th>Name</th>
            <th>Effort</th>
            <th>Base_stat</th>
          </tr>
          {pokemonData?.stats.map(item => {
            return (
            <tr key={item.stat.name}>
              <td>{item.stat.name}</td>
              <td>{item.effort}</td>
              <td>{item.base_stat}</td>
            </tr>
            )
          })}
          
          </table>

        <p><strong> Types: </strong></p>
        <table>
          <tr>
            <th>Slot</th>
            <th>Type</th>
          </tr>
          {pokemonData?.types.map(item => {
            return (
            <tr key={item.type.name}>
              <td>{item.slot}</td>
              <td>{item.type.name}</td>
            </tr>
            )
          })}
        </table>
        
        <p><strong> Weight: </strong>{pokemonData?.weight}</p>

        <p><strong> Moves: </strong></p>
        <table>
          <tr>
            <th>Name</th>
            <th>Details</th>
          </tr>
          {pokemonData?.moves.map(item => {
            return (
            <tr key={item.move.name}>
              <td>{item.move.name}</td>
              <table>
                <tr>
                  <th>Level Learned At</th>
                  <th>Move Learn Method</th>
                  <th>Version Group</th>
                </tr>
                {item?.version_group_details.map(item => {
                  return (
                  <tr key={item.level_learned_at}>
                    <td>{item.level_learned_at}</td>
                    <td>{item.move_learn_method.name}</td>
                    <td>{item.version_group.name}</td>
                  </tr>
                  )
                })}
              </table>
            </tr>
            )
          })}
        </table>

        <a href="/" className='go-back'>Go Back</a>
      </div>
    </div>
  );
}
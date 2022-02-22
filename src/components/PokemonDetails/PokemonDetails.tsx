import React, { Component, useEffect, useState } from 'react';
import Pokemon from '../../models/Pokemon';
import axios from '../../configs/HttpRequest';
import './PokemonDetails.scss'
import { useParams } from 'react-router-dom';
import PokemonService from '../../services/PokemonService';
import { AxiosResponse } from 'axios';
import Loader from '../Spinner/Spinner';

type PokemonDetailsParams = {
  id: string;
};

export default function PokemonDetails():JSX.Element {
  const {id} = useParams<PokemonDetailsParams>()
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if(id !== undefined){
      getPokemonDetails(Number(id))
    }
  }, []);

  const getPokemonDetails = (pokemonId: number):void => {
    PokemonService.get(`pokemon/${pokemonId}`)
      .then((response: AxiosResponse) => {
        setPokemonData(response.data)
        setLoading(false)
      })
      .catch((e: Error) => {
        setLoading(false)
      });
  };

  //In this page was neede to create a reusable component for Table, but for time reasons was not possible.
  //Also for Moves are a lot of data in some cases, and using pagination will be good.

  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`


  return (
    <>
      <Loader loading={loading} text="Loading pokemon data ..." />
      <div className="details-wrapper">
        <div className="item-details">
          <img src={pokemonImg} alt="pokemon-img" />
          <div className="left-content">
            <h1>
              {pokemonData?.name}
            </h1>
            <p>
              <strong> Species: </strong>
              {pokemonData?.species.name}
            </p>

            <p>
              <strong> Weight: </strong>
              {pokemonData?.weight ? pokemonData?.weight/10 + "kg" : "-"}
            </p>

            <ul className='inline-items'>
              <li><strong> Types: </strong></li>
              {pokemonData?.types.map((item) => {
                return (
                  <li key={item.type.name}>{item.type.name},</li>
                );
              })}
            </ul>
            <a href="/" className="go-back">
              Go Back
            </a>
          </div>
          
          <h2>Stats: </h2>
          <table className='striped-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Effort</th>
                <th>Base Stat</th>
              </tr>
            </thead>
            <tbody>
              {pokemonData?.stats.map((item) => {
                return (
                  <tr key={item.stat.name}>
                    <td>{item.stat.name}</td>
                    <td>{item.effort}</td>
                    <td>{item.base_stat}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <h2>Moves: </h2>
          {pokemonData?.moves.map((_item) => {
            return (
              <>
              <h3>{_item.move.name.replaceAll("-", " ")}</h3>
              <table className='striped-table'>
                <thead>
                  <tr>
                    <th>Level Learned At</th>
                    <th>Move Learn Method</th>
                    <th>Version Group</th>
                  </tr>
                </thead>
                <tbody>
                  {_item?.version_group_details.map((item, index) => {
                    return (
                      <tr key={_item.move.name + index}>
                        <td>{item.level_learned_at}</td>
                        <td>{item.move_learn_method.name}</td>
                        <td>{item.version_group.name}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { BASE_URL } from '../../constants/constants';
import Pokemon from '../../models/Pokemon';
import PokemonService from '../../services/PokemonService';
import { PokemonItem } from '../PokemonItem/PokemonItem';
import "./PokemonsList.scss";

export default function PokemonsList():JSX.Element {
  const limit:number = 16;
  const [currentItems, setCurrentItems] = useState<Pokemon[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    getAllPokemons(limit, offset)
  }, []);

  const getPokemonDetails = (path: string):void => {
    PokemonService.get(path)
      .then((response: AxiosResponse) => {
        console.log("pokemon details", response)
        setCurrentItems(prevItems => {
          return prevItems.concat(response.data)
        })
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };


  const getAllPokemons = (limit: number, offset: number) => {
    PokemonService.getAll(limit, offset)
      .then((response: AxiosResponse) => {
        console.log("res", response)
        response.data.results.map((item: {name: string, url: string}) => {
          const path = item.url.replace(BASE_URL, "");
          console.log("item", path)
          getPokemonDetails(path)
        })
        //setCurrentItems(response.data.results)
        setTotalPages(response.data.count / 16)
        setPageCount(Math.ceil(response.data.totalPages / limit));
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const handlePageClick = () => {
    //todo
  }
  
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
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Previous"
      />
    </div>
  );
}
  
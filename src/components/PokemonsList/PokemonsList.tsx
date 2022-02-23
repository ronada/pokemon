import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants/constants';
import Pokemon, { Generic } from '../../models/Pokemon';
import PokemonService from '../../services/PokemonService';
import { PokemonItem } from '../PokemonItem/PokemonItem';
import "./PokemonsList.scss";
import logo from '../../assets/legends-arceus-logo.jpg';
import Loader from '../Spinner/Spinner';
import NoDataToShow from '../NoDataToShow/NoDataToShow';
import Pagination from '../Pagination/Pagination';

export default function PokemonsList():JSX.Element {
  const limit:number = 16;
  const [currentItems, setCurrentItems] = useState<Generic[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    getAllPokemons(limit, offset)
  }, [offset]);

  const getAllPokemons = (limit: number, offset: number) => {
    setLoading(true)
    PokemonService.getAll(limit, offset)
      .then((response: AxiosResponse) => {
        response.data.results.map((item: {name: string, url: string}) => {
          const path = (item.url.replace(BASE_URL, "")).slice(0, -1);
          item.url = path
        })
        setCurrentItems(prevItems => {
          return prevItems.concat(response.data.results)
        })
        setPageCount(Math.ceil(response.data.count / limit));
        setLoading(false)
      })
      .catch((e: Error) => {
        setErrorMessage("An error happened!")
        setLoading(false)
      });
  };

  const handlePageClick = (event: {selected:number}) => {
    const newOffset:number = (event.selected * limit);
    setCurrentItems([])
    setOffset(newOffset);
  }

  const currentPage = Math.round(offset / limit);
  
  return (
    <>
      <Loader loading={loading} text="Loading pokemons data ..." />
      {!loading && <div className="content-wrapper">
          <div className="logo">
            <img src={logo} alt="pokemons-logo" />
          </div>
        <div className="items-wrapper">
          {
            currentItems.length>0 ? currentItems.map(item => {
              return <PokemonItem item={item} key={item.name}/>
            }) : <NoDataToShow error={errorMessage} />
          }
        </div>
        {currentItems.length>0 && 
        <Pagination 
          onPageChange={handlePageClick} 
          pageCount={pageCount}
          forcePage={currentPage}
        />}
      </div>}
    </>
  );
}
  
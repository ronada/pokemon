import React from 'react';
import logo from './logo.svg';
import './App.scss';
import PokemonsList from './components/PokemonsList/PokemonsList';
import { Route, Routes } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PokemonsList />} />
        <Route path="/pokemons/:id" element={<PokemonDetails />} />
      </Routes>
    </div>
  );
}

export default App;

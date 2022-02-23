import React from 'react';
import './App.scss';
import PokemonsList from './components/PokemonsList/PokemonsList';
import { Route, Routes } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PokemonsList />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

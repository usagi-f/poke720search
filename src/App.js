import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Search from './Search';
import PokemonDetail from './PokemonDetail';
import pokemonData from './resource.json';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search pokemonData={pokemonData} />} />
        <Route path="/pokemon/:id" element={<PokemonDetail pokemonData={pokemonData} />} />
      </Routes>
    </Router>
  );
};

export default App;

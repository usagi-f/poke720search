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
        <Route path="/poke720search" element={<Search pokemonData={pokemonData} />} />
        <Route path="/poke720search/pokemon/:id" element={<PokemonDetail pokemonData={pokemonData} />} />
      </Routes>
    </Router>
  );
};

export default App;

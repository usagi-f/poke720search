import React from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = ({ pokemonData }) => {
  const { id } = useParams();
  const pokemon = pokemonData.find(p => p.id === parseInt(id));

  return (
    <div>
      {pokemon ? (
        <h1>{pokemon.name}の順位: {pokemon.rank}</h1>
      ) : (
        <h1>ポケモンが見つかりませんでした。</h1>
      )}
    </div>
  );
};

export default PokemonDetail;

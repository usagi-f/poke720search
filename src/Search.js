import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = ({ pokemonData }) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (input) {
      const filteredSuggestions = pokemonData.filter(pokemon =>
        pokemon.name.includes(input)
      );
      console.log(filteredSuggestions)
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [input, pokemonData]);

  const navigate = useNavigate();

  const handleSuggestionClick = (pokemon) => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="ポケモンの名前を入力"
      />
      <ul>
        {suggestions.map(pokemon => (
          <li key={pokemon.id} onClick={() => handleSuggestionClick(pokemon)}>
            {pokemon.name.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [state, setState] = useState({
    pokemon: [{}]
  });
  useEffect(() => {
    for (let page = 1; page < 10; page++) {

      axios.get(`https://pokeapi.co/api/v2/pokemon/${page}/`)
        .then(res => {
          console.log('number ', page);
          setState({
            ...state,
            pokemon: [
              ...state.pokemon,
              {
                name: res.data.name,
                pokedex: res.data.id,
                look: res.data.sprites.front_default,
                stats: {
                  speed: res.data.stats[0].base_stat,
                  special_defense: res.data.stats[1].base_stat,
                  special_attack: res.data.stats[2].base_stat,
                  defense: res.data.stats[3].base_stat,
                  attack: res.data.stats[4].base_stat,
                  hitpoint: res.data.stats[5].base_stat
                }
              }
            ]
          });
        });
    }
  }, []);
  console.log(state.pokemon);
  //console.log(state.pokemon[1].name);
  return (
    <div className="App">
      {JSON.stringify(state, null, 2)}
    </div>
  );
}

export default App;

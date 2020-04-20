import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ state, setState ] = useState({
    pokemon: [{name: 'loc'}]
  });
  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/1/')
      .then(res=>{
        setState({pokemon:[...state.pokemon,{name: res.data.name}]})
    })
  },[])
  console.log(state.pokemon[0].name);
  //console.log(state.pokemon[1].name);
  return (
    <div className="App">
      fdafdafd
    </div>
  );
}

export default App;

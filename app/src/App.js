import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from './store/actions/pokemonActions';
import { quicksort } from './quicksort';

import './App.css';

function App (props) {

  useEffect(() => {
    props.fetchPokemon(10);
  }, []);

  for (let i=0;i<props.pokemon.length;i++){

  }
  quicksort(props.pokemon);



  return (
    <div className="App">
      {/*props.pokemon.map((poke)=>{
        JSON.stringify(poke, null, 2)
      })*/}
    </div>
  );
}

const mapStateToProps = state => {
  return{
    pokemon: state.pokemonReducer
  };
};
export default connect(
  mapStateToProps, {fetchPokemon}
)(App)

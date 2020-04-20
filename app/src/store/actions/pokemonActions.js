import axios from 'axios';

export const fetchPokemon = (num) => {
    return dispatch => {
            axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=9`)
                .then(res => {
                    //console.log(res.data)
                    res.data.results.map((poke)=>{
                        axios.get(`${poke.url}`).then(response=>{
                            dispatch({ type: 'FETCH_POKEMON', payload: response.data })
                        })
                    })
                    /*
                    res.map((poke)=>(
                        axios.get(`${poke.data.url}`)
                        .then(response=>{
                            dispatch({ type: 'FETCH_POKEMON', payload: response.data })
                        })
                    ))*/
                })
    }
}
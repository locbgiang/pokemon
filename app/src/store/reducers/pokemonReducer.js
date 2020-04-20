const initialState = {
    pokemon: [{
        name: '',
        pokedex: '',
        look: '',
        stats: {
            speed: '',
            special_defense: '',
            special_attack: '',
            defense: '',
            attack: '',
            hitpoint: ''
        }
    }]
}

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POKEMON':
            return {
                ...state,
                pokemon: [
                    ...state.pokemon,
                    {
                        name: action.payload.name,
                        pokedex: action.payload.id,
                        look: action.payload.sprites.front_default,
                        stats: {
                            speed: action.payload.stats[0].base_stat,
                            special_defense: action.payload.stats[1].base_stat,
                            special_attack: action.payload.stats[2].base_stat,
                            defense: action.payload.stats[3].base_stat,
                            attack: action.payload.stats[4].base_stat,
                            hitpoint: action.payload.stats[5].base_stat
                        }
                    }
                ]
            }
    }
    return state
}
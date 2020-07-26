import React, { createContext, useReducer } from 'react';
import pokemonReducer, { CAPTURE, RELEASE, ADD } from '../Reducers/PokemonReducer';


export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
    const [state, dispatch] = useReducer(pokemonReducer, 
        {
            pokemons: [
                { id: 1, name: 'Bulbasaur' },
                { id: 2, name: 'Charmander' },
                { id: 3, name: 'Squirtle' }
            ],
            capturedPokemons: []
        }
    );

    const capture = (pokemon) => {
        dispatch({ type: CAPTURE, pokemon });
    };

    const release = (pokemon) =>  {
        dispatch({ type: RELEASE, pokemon });
    };

    const add = (pokemon) => {
        dispatch({type:ADD, pokemon})
    }

    return (
        <PokemonContext.Provider value={{ pokemons:state.pokemons, capturedPokemons:state.capturedPokemons, capture, release, add }}>
            {props.children}
        </PokemonContext.Provider>
    )
}

export default PokemonContextProvider;
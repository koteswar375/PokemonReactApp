import React, { createContext, useState } from 'react';


export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
    const [pokemons, setPokemons] = useState([
        { id: 1, name: 'Bulbasaur' },
        { id: 2, name: 'Charmander' },
        { id: 3, name: 'Squirtle' }
    ]);
    const [capturedPokemons, setCapturedPokemons] = useState([]);

    const capture = ()=>{

    }

    const release = ()=> {

    }

    return (
        <PokemonContext.Provider value = {pokemons,capturedPokemons,capture, release}>
            {props.children}
        </PokemonContext.Provider>
    )
}
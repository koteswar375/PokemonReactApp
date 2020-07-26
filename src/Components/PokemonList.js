import React, {useContext} from 'react';
import { PokemonContext } from '../Contexts/PokemonContext';


const PokemonList = (props) => {
    const {pokemons, capture} = useContext(PokemonContext);

    return (
        <div className="pokemon-list center-align z-depth-2 " >
            <h3>Pokemon List</h3>
            {pokemons.map(pokemon => (
                <div>
                    <h6>{pokemon.name}</h6>
                    <button className="btn" onClick={()=>capture(pokemon)}>Capture</button>
                </div>
            ))}
        </div>
    )

}

export default PokemonList;
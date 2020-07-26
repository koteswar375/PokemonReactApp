import React, {useContext} from 'react';
import { PokemonContext } from '../Contexts/PokemonContext';


const CapturedPokemonList = (props) => {
    const {capturedPokemons, release} = useContext(PokemonContext);

    return (
        <div className="pokemon-captured-list center-align z-depth-2" >
            <h3>Pokemon Captured List</h3>
            {capturedPokemons.map(pokemon => (
                <div>
                    <h6>{pokemon.name}</h6>
                    <button className="btn" onClick={()=>release(pokemon)}>Release</button>
                </div>
            ))}
        </div>
    )

}

export default CapturedPokemonList;
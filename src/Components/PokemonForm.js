import React, {useState, useContext} from 'react';
import { PokemonContext } from '../Contexts/PokemonContext';

const PokemonForm = (props) => {
    const [name, setName] = useState('');

    const {add} = useContext(PokemonContext);

    const addPokemon = (e) => {
        e.preventDefault()
        add({name, id:Math.floor(Math.random()*103838)})
        setName('')
    }

    return (
        <form className="pokemon-form">
            <div className="input-field">
                <input type="text" value={name} id="name" placeholder="Enter name of pokemon" onChange={(e)=>setName(e.target.value)} />
                <button className="btn" onClick={addPokemon}>Add Pokemon</button>
            </div>
        </form>
    )
}

export default PokemonForm;
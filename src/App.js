import React from 'react';
import PokemonContextProvider from './Contexts/PokemonContext';
import PokemonList from './Components/PokemonList';
import CapturedPokemonList from './Components/CapturedPokemonList';
import PokemonForm from './Components/PokemonForm';

function App() {
  return (
    <div className="App">
      <PokemonContextProvider>
        <div class="pokemon-container">
          <PokemonList />
          <CapturedPokemonList />

        </div>
        <PokemonForm />

      </PokemonContextProvider>
    </div>
  );
}

export default App;

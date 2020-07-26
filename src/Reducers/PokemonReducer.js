export const CAPTURE = 'CAPTURE';
export const RELEASE = 'RELEASE';
export const ADD = 'ADD';



const pokemonReducer = (state, action) => {
    const capture = () => ({
        pokemons: state.pokemons.filter(obj => obj !== action.pokemon),
        capturedPokemons: [...state.capturedPokemons, action.pokemon]
    });

    const release = () => ({
        pokemons: [...state.pokemons, action.pokemon],
        capturedPokemons:  state.capturedPokemons.filter(obj => obj !== action.pokemon)
    });

    const add = () => ({
        pokemons: [...state.pokemons, action.pokemon],
        capturedPokemons:  [...state.capturedPokemons]
    })

    switch (action.type) {
        case RELEASE:
            return release();
        case CAPTURE:
            return capture();
        case ADD:
            return add()
        default:
            return state;
    }
};

export default pokemonReducer;
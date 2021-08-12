import { createSlice } from '@reduxjs/toolkit';

export const PokemonReducer = createSlice({
    name: "pokemon",
    initialState: [],
    reducers: {
        setPokemons: (state, {payload}) => payload
    }
})

//escritura
export const {setPokemons} = PokemonReducer.actions;


//lectura
export default PokemonReducer.reducers
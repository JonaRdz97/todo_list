import {createSlice} from '@reduxjs/toolkit';

export const toDoReducer = createSlice({
    name: "toDoCard",
    initialState: [],
    reducers: {
        setToDoCards: (state, {payload}) => payload,
        deleteCard: () => {},
    },
});

//escritura 
export const {setToDoCards} = toDoReducer.actions;

//lectura
export default toDoReducer.reducer;
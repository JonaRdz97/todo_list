import {createSlice} from '@reduxjs/toolkit';

export const idReducer = createSlice({
    name: "numberOfCards",
    initialState: {currentID: 5},
    reducers: {
        incrementID: (state) => {
            return {...state, currentID: state.currentID + 1}
        },
    },
});

//escritura 
export const  {incrementID} = idReducer.actions;

//lectura
export default idReducer.reducer;
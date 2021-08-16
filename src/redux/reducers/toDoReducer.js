import {createSlice} from '@reduxjs/toolkit';

export const toDoReducer = createSlice({
    name: "toDoCard",
    initialState: [],
    reducers: {
        setToDoCards: (state, {payload}) => payload,
        deleteCard: (state,{payload}) => {
            const listToDo = state.filter((element) => {
                return payload !== element.id
            })
            return listToDo;
        },
        updateCard: (state, {payload}) => {
            state.forEach((element) => {
                if(element.id === payload.id) {
                    element.title = payload.title;
                    element.prioridad = payload.prioridad;
                    element.active = payload.active;
                }
            });
        }
    }
});

//escritura 
export const {setToDoCards, deleteCard, updateCard} = toDoReducer.actions;

//lectura
export default toDoReducer.reducer;
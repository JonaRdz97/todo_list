import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from "./reducers/toDoReducer";
import idReducer from "./reducers/idReducer";

function initStore(){
    return configureStore({
        reducer:{
            toDoCard: ToDoReducer,
            numberOfCards: idReducer 
    }});
}

const store = initStore();

export default store;
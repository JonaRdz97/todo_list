import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from "./reducers/toDoReducer";

function initStore(){
    return configureStore({
        reducer:{
            toDoCard: ToDoReducer
    }});
}

const store = initStore();

export default store;
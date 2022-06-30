import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {todosSlice} from "../redux/slice";


const rootReducer = combineReducers({
  todos:todosSlice.reducer 
})

export const store = configureStore(
  {
    reducer: rootReducer
  },
  
);
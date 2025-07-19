import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './src/features/counter/counterSlice'
import themeReducer from './src/features/counter/themeSlice'


export const store = configureStore({
    reducer:{
        counter: counterReducer,
        theme: themeReducer
    }
})
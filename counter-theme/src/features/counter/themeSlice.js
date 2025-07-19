import { createSlice } from "@reduxjs/toolkit";

export const themeState = createSlice({
   name:"theme" ,
   initialState:{
    value: true
   },
   reducers:{
    toggleTheme:(state) => {
        state.value = !state.value
    }
   }
})

export const {toggleTheme} = themeState.actions
export default themeState.reducer
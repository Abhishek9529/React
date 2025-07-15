import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    initialState:[],
    reducers:{
        addNote:(state, action) =>{
          state.push({id: nanoid(), note: action.payload, createdAt: new Date().toLocaleString() })
        },
        deleteNote:(state, action) =>{
          return state.filter(note => note.id !== action.payload)
        },
        showAllNote:(state, action) =>{
          state.push({})
        },
        filterNote:(state, action) =>{
          state.push({})
        },
    }
})

export const{addNote, deleteNote, showAllNote, filterNote} = notesSlice.actions
export default notesSlice.reducer
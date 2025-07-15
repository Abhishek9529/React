import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './src/features/notesSlice'

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
})
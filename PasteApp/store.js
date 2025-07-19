import { configureStore } from '@reduxjs/toolkit'
import  pasteReducer  from './src/features/pasteSlice'

export const store = configureStore({
  reducer: {
    paste: pasteReducer
  },
})
import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo:(state, action) =>  {
           state.push({id: nanoid(), text: action.payload, completed: false});
        },
        deleteTodo: (state, action)=> {
          return state.filter(todo => todo.id !== action.payload)
        },
        toggleTodo:(state, action) =>  {
          const todo = state.find(t => t.id === action.payload)
          if (todo) todo.completed = !todo.completed;
        }
    }
})

export const {addTodo, deleteTodo, toggleTodo} = todoSlice.actions;
export default todoSlice.reducer;
import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const todos = useSelector(state => state.todos)
  return (
    <div className='space-y-2 h-screen '>
           {todos.map(todo =>(
                <TodoItem key={todo.id} todo={todo}/>
            ))}
      
    </div>
  )
}

export default TodoList

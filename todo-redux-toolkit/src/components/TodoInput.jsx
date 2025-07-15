import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addTodo} from '../features/todoSlice'

const TodoInput = () => {
    const todos = useSelector(state => state.todos)
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    
    console.log(todos);/////------->>>>>>>>>
    
    function handleAdd (){
        if(text !== ''){
          dispatch(addTodo(text))
        }
        setText('')
    }
  return (
    <div className='mt-20'>
      <input type="text" value={text} onChange={e=> setText(e.target.value)} placeholder='Enter Task' />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  )
}

export default TodoInput

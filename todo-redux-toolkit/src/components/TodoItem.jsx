
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../features/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()

  function handleDelete(id) {
    dispatch(deleteTodo(id))
  }

  function handleToggle(id) {
    dispatch(toggleTodo(id))
  }
  return (
    <div className='flex flex-row justify-center items-center'>
      <p className={todo.completed ? "line-through text-gray-400" : ""}>{todo.text} </p>
      <div className='ml-2 '><input type="checkbox"
        onChange={() => handleToggle(todo.id)} /></div>
      <div onClick={() => handleDelete(todo.id)} className='text-red-500 ml-2 cursor-pointer'>x</div>
    </div>
  )
}

export default TodoItem

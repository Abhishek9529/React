import React, { useMemo } from 'react'
import { filterTodo } from '../../utils'

const TodoList = ({ theme, todos, tab }) => {

    const filteredTodos = useMemo(() => filterTodo(todos, tab), [todos, tab])

    return (
        <div className={theme ? 'bg-black text-white p-2' : 'p-2'}>
            <p><b>Note: </b> <code>List is</code> artificially slowed down!</p>
            <ul className='flex flex-col'>
                {filteredTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.completed ?
                            <s>{todo.text}</s> :
                            todo.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList

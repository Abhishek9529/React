import { useState } from "react"
import TodoList from "./components/TodoList"
import { createTodos } from "../utils"

const todos = createTodos()

function App() {
  const [theme, setTheme] = useState(false)
  const [tab, setTab] = useState('All')

  return (
    <>
      <div className="p-4 space-y-4">
        <div>
          <button onClick={() => setTab('All')} className="border bg-gray-200 px-2 rounded-md">All</button>
          <button onClick={() => setTab('Active')} className="border bg-gray-200 px-2 rounded-md">Active</button>
          <button onClick={() => setTab('Completed')} className="border bg-gray-200 px-2 rounded-md">Completed</button>
        </div>

        <label>
          <input type="checkbox"
            value={theme}
            onChange={e => setTheme(e.target.checked)}
          />
          Dark Mode
        </label>

        <div className="bg-gray-300 w-full h-1 mt-4"></div>

        <TodoList 
        theme={theme}
        todos={todos}
        tab={tab}
        />
      </div>
    </>
  )
}

export default App

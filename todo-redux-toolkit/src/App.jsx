import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {


  return (
    <>
      <div className="w-full h-screen bg-gray-800 text-white flex flex-col space-y-3 justify-center items-center">
        <TodoInput />
        <TodoList />
      </div>

    </>
  )
}

export default App

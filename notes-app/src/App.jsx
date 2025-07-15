import InputNote from "./components/InputNote"
import SearchNote from "./components/SearchNote"

function App() {

  return (
    <>
     <div className=" w-full h-screen flex flex-col justify-center items-center p-4 text-white bg-gray-600"> 
      <div className="flex space-x-4">
      <h1>Notes App</h1>
      <SearchNote/>
      </div>
      <InputNote/>
     </div>
    </>
  )
}

export default App

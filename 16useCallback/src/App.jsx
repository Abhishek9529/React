import { useState } from "react"
import ChildComponent from "./components/ChildComponent"
import { useCallback } from "react"
import ComplexTaskComp from "./components/ComplexTaskComp"


function App() {
  // const [count, setCount] = useState(0)

  // const handleClick = useCallback(()=>{
  //   console.log("Function in App component...");
    
  //   setCount(count+1)
  // },[count])

  return (
    <>
        {/* <h1>Count: {count} </h1>
         <button onClick={handleClick} className="border px-2">Increment</button>
         <ChildComponent
         handleClick={handleClick}
          name="Click me"
         /> */}
         <div className="bg-gray-800 w-full h-screen flex felx-col justify-center items-center text-white">
               <ComplexTaskComp/>
         </div>
    </>
  )
}

export default App

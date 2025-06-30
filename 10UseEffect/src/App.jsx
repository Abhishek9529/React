import { useEffect, useState } from "react"
import TimerComponent from "./components/TimerComponent"
import LoggerComponent from "./components/LoggerComponent"
import ResizeComponent from "./components/ResizeComponent"
import DataFetcher from "./components/DataFetcher"
import MultiEffectComponent from "./components/MultiEffectComponent"

// we will learn use of useEffect hook and its 4 variations...
function App() {
  const [count, setCount] = useState(0)

// 1. variation useEffect without any dependencies array.
// useEffect(()=>{
//  console.log(" i will run on every render", );
// })

// 2. variation useEffect with empty dependencies array.
// useEffect(()=>{
//  console.log("i will run only on first render", );
// }, [])

// 3. variation useEffect with dependencies array.
// useEffect(()=>{
//  console.log(" i will run every time when count updated", );
// }, [count]) // we aslo add multiple dependencies 

// 4. variation useEffect with dependencies array and cleanup function
// useEffect(()=>{
//  console.log("run only on first render", );
//  return () => {
// console.log("count unmounted");
//  }
// }, [count])


  return (
    <>
      <div className="w-full h-screen bg-gray-800 text-white flex flex-row items-center justify-center">
        {/* <MultiEffectComponent/> */}
        {/* <DataFetcher/> */}
        {/* <ResizeComponent/> */}
        {/* <LoggerComponent/> */}
        {/* <TimerComponent /> */}
        {/* <button onClick={() => setCount(count + 1)}>Click me!</button>
        <h1>Count: {count}</h1>  */}
      </div>
    </>
  )
}

export default App

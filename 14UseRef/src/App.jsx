import {useEffect, useRef, useState} from 'react'
import Ex2 from './components/StopWatch';
import ClickCounter from './components/ClickCounter';
import InputFocus from './components/InputFocus';
import Video from './components/Video';
function App() {
  // use of ref its persist the value  
  // const value = useRef(0)

  const [count, setCount] = useState(0)
  function handleIncrement(){
    value.current += 1
    console.log("value of val :", value.current);
     setCount(count +1)
  }

  useEffect(()=>{
    // console.log("i am render again...");
  })

  function handleDecrement(){
     setCount(count -1)
  }
  
  return (
    <>
      <div className=" w-full h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
        {/* <button onClick={handleIncrement}>+</button>
        <h1>Count: {count}</h1>
        <button onClick={handleDecrement}>-</button> */}
        
        {/* <ClickCounter/> */}
        {/* <InputFocus/> */}
        <Video/>
      </div>
    </>
  )
}

export default App

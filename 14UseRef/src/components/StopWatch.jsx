import React, { useRef, useState } from 'react'
// stop the setIntervel using useRef
const StopWatch = () => {
    const [second, setSecond] = useState(0)
    const value = useRef()

    function handleStart(){
       value.current = setInterval(() => {
            setSecond(second => second +1)
        }, 1000);
    }
    function handleStop(){
        clearInterval(value.current);
    }
    function handleReset(){
       handleStop()
       setSecond(0)
    }
  return (
    <div>
      <h1>Seconds: {second}</h1>
      <button onClick={handleStart} className='bg-yellow-200 text-black px-2'>Start</button>
      <button onClick={handleStop} className='bg-blue-200 text-black px-2'>Stop</button>
      <button onClick={handleReset} className='bg-green-200 text-black px-2'>Reset</button>
    </div>
  )
}

export default StopWatch

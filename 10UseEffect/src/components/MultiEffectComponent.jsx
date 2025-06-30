import React, { useEffect, useState } from 'react'

const MultiEffectComponent = () => {
    const [count, setCount] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(()=>{
        console.log("Count Changed: ", count );
    }, [count])

    useEffect(()=>{
     const handleInterval = setInterval(() => {
        setSecond(prev => prev + 1)
     }, 1000);

     return() =>{
        console.log("Component unmounted.");
        clearInterval(handleInterval);
     }
    }, [])


  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}> Increment</button>
      <h1>Seconds: {second}</h1>
    </div>
  )
}

export default MultiEffectComponent

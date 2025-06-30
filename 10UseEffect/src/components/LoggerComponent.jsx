import React, { useEffect, useState } from 'react'

const LoggerComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("it will run on every render/countUpdate", count);
    })

  return (
    <div>
      <button onClick={()=> setCount(count +1)}>Increment</button>
      <h1>Count: {count}</h1>
    </div>
  )
}

export default LoggerComponent

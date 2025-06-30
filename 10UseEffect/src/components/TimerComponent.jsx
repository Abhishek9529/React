import React, { useEffect, useState } from 'react'

const TimerComponent = () => {
    const [second, setsecond] = useState(0);

    useEffect(()=>{
        const handleInterval = setInterval(() => {
        console.log("setInterval executed");
           setsecond(prev => prev +1)
        }, 1000);

        return() =>{
            console.log("Time to stop", Math.random() *10);
            clearInterval(handleInterval)
        }
    }, [])
    // it will run on first render.
  return (
    <div>
      <h1>Seconds:{second} </h1>
    </div>
  )
}

export default TimerComponent

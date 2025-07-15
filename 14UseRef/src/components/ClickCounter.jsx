import React from 'react'
import { useRef } from 'react'

const ClickCounter = () => {
    let ref =  useRef(0) 

    function handleClick(){
     ref.current = ref.current + 1
     alert('You Clicked' + ref.current + 'Times!')
    }
  return (
    <div>
      <button onClick={handleClick} className='bg-amber-300 text-black px-2'>Click</button>
    </div>
  )
}

export default ClickCounter

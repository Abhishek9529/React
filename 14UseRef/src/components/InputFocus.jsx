import React from 'react'
import { useRef } from 'react'

const InputFocus = () => {
    let inputRef = useRef()

    function handlFocus(){
        inputRef.current.focus()
    }
  return (
    <div>
      <input ref={inputRef} type="text" placeholder='Enter Text' />
      <button onClick={handlFocus} className='bg-yellow-200 text-black px-2'>Focus the input</button>
    </div>
  )
}

export default InputFocus

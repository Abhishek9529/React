import React, { useRef } from 'react'

// change the color of one btn using other btn (by using useRef)
// change the color of btn two by clicking the btn one
const Ex1 = () => {
    const btnRef = useRef()

    function handleClick(){
        btnRef.current.style.backgroundColor = 'red'
    }
  return (
    <div>
      <button onClick={handleClick} className='bg-green-300 px-2' >One</button>
      <button ref={btnRef}  className='bg-amber-200 px-2'>Two</button>
    </div>
  )
}

export default Ex1

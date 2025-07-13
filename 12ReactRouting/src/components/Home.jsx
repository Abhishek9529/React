import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/about')
    }
  return (
    <div className='bg-blue-300 w-full h-screen flex flex-row items-center justify-center'>
      <h1>Home Page</h1>
       <button onClick={handleClick}>Move to About</button>
    </div>
  )
}

export default Home

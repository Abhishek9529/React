import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/')
    }
  return (
    <div className='bg-green-300 w-full h-screen flex flex-row items-center justify-center'>
      <h1>About Page</h1>
      <button onClick={handleClick}>Move to Home</button>
    </div>
  )
}

export default About

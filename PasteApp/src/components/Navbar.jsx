import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' w-full bg-gray-800 text-white p-2 flex flex-row justify-center gap-5 mb-4'>
   <NavLink 
   className={({ isActive }) =>
    isActive ? 'text-blue-500' : ''
  }
   to={'/'}
   >
    Home
   </NavLink>

   <NavLink
   className={({ isActive }) =>
    isActive ? 'text-blue-500' : ''
  }
   to={'/pastes'}
   >
    Pastes
   </NavLink>
    </div>
  )
}

export default Navbar

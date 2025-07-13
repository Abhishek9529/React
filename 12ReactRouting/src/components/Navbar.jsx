import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul className='bg-slate-400 w-full flex flex-row items-center justify-around p-4 text-2xl'>
        <li><NavLink className={({isActive}) => isActive ? "border border-blue-100" : ""} to="/">Home</NavLink></li>
        <li><NavLink  className={({isActive}) => isActive ? "border border-yellow-400" : ""} to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "border border-green-300" : ""} to="/about">About</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar

import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='bg-amber-300 w-full h-screen flex flex-row items-center justify-center'>
      <h1>Dashboard Page</h1>
       <Outlet/>
    </div>
  )
}

export default Dashboard

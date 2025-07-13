import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { UserContext } from '../App'

const ChildC = () => {
    const user = useContext(UserContext)
    const {theme, setTheme} = useContext(ThemeContext)

    function toggleTheme (){
       if(theme === 'light'){
        setTheme('dark')
       }else{
        setTheme('light')
       }
    }
  return (
    <div>
      <button className='bg-indigo-500 text-white p-2 rounded-md' onClick={toggleTheme}>Change Theme</button>
      <h1 className='bg-amber-500 text-white p-2 rounded-md'>Name : {user.name}</h1>
    </div>
  )
}

export default ChildC

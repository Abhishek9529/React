import { createContext, useState } from 'react'
import ChildA from './components/ChildA'

// step1: create context
const UserContext = createContext();
// step2: wrap all the child inside a provider
// step3: pass value
// cunsume inside the cunsumer

// create conntext for theme-changer
const ThemeContext = createContext();

function App() {
  const [user, setUser] = useState({ name: "Abhi" });
  const [theme, setTheme] = useState('light');

  return (
    <>
     <UserContext.Provider value={user}>
       <ThemeContext.Provider value={{theme, setTheme}}>
        <div style={{backgroundColor: theme === 'light' ? 'white' : 'black'}} className='w-[400px] h-[400px] border flex flex-row justify-center items-center rounded-md m-4'>
          <ChildA />
        </div>
      </ThemeContext.Provider>
      </UserContext.Provider>
      
    </>
  )
}

export default App
export {UserContext} 
export {ThemeContext}

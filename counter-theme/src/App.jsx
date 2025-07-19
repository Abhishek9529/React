import { useSelector } from 'react-redux'
import Counter from "./components/Counter"

function App() {
const themeColor = useSelector((state) => state.theme.value)
  return (  
    <>
    <div className="bg-slate-400 w-full h-screen flex flex-row justify-center items-center">
       <div className={themeColor ? "bg-white text-black" : "bg-black text-white"}>
        <Counter/>
     </div>
    </div>
    </>
  )
}

export default App

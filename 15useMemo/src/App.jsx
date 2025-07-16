import { useMemo, useState } from "react"

function App() {
  const [input, setInput] = useState(0)
  const [count, setCount] = useState(0)
 
  function complexTask(num){
    console.log("complex task fun run");
    console.log(input);
    
    for(let i=1; i < 1000000000; i++){}
    return  num*2
  }

  const result = useMemo(()=> complexTask(input), [input]);

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
        <h1>Count: { count}</h1>
        <button onClick={()=> setCount(count+1)} className="bg-yellow-200 text-black px-2 rounded-md">Increment</button>
        <input type="number"
        placeholder="Input the number"
        value={input}
        onChange={e => setInput(e.target.value)}
         />
        <h1>Result of the Complex Task: {result}</h1>
      </div>
    </>
  )
}

export default App

import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset, incrementByAmount } from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  
  const [amount, setAmount] = useState(0)
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick(){
    dispatch(increment());
  }
  function handleDecrementClick(){
    dispatch(decrement());
  }
  function handleResetClick(){
    dispatch(reset());
  }
  function handleIncrementByAmtClick(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <>
      <div className=" w-full h-screen bg-gray-600 flex flex-row justify-center items-center text-white">
        <div className="space-y-4">
          <button onClick={handleIncrementClick} className="bg-yellow-300 px-4 font-bold text-black">+</button>
          <h4>Count:{count}</h4>
          <button onClick={handleDecrementClick} className="bg-green-300 px-4 font-bold text-black">-</button>
          <br />
          <button onClick={handleResetClick} className="bg-green-300 px-4 font-bold text-black">Reset</button>
           <br />
           <input type="Number"
           value={amount}
           placeholder="Enter Amount"
           onChange={(e)=> setAmount(e.target.value)}
            />
           <br />
          <button onClick={handleIncrementByAmtClick}>IncrementByAmt</button>
        </div>
      </div>
    </>
  )
}

export default App

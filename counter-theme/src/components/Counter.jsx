import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../features/counter/counterSlice'
import { toggleTheme } from "../features/counter/themeSlice"

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)

    function handleIncrement() {
        dispatch(increment())
    }
    function handleDecrement() {
        dispatch(decrement())
    }
    function handleReset() {
        dispatch(reset())
    }

    function handleTheme() {
        dispatch(toggleTheme())
    }

    return (
        <div className='w-[400px] h-[240px] p-4 text-center space-y-8 '>
            <h1>Counter (Theme)</h1>
            <h1>Count:{count}</h1>
            <div className='space-x-10'>
                <button onClick={handleIncrement} className='bg-green-300 px-2'>+</button>
                <button onClick={handleDecrement} className='bg-yellow-300 px-2'>-</button>
                <button onClick={handleReset} className='bg-blue-300 px-2'>Reset</button>
            </div>
            <button onClick={handleTheme} className='border px-2 rounded-md'>Dark Mode</button>
        </div>
    )
}

export default Counter

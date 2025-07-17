import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState, useCallback } from 'react'


const ComplexTaskComp = () => {
    const complexRef = useRef(null);
    const[count, setCount] = useState(0);
    const [text, setText] = useState('');

    const complexTask = useCallback(() =>{
        console.log("Complex task run...");
        let result = 0;
        for(let i=0; i<100000000; i++){
            result += i;
        }
        return result;
    }, [count])

    useEffect(()=>{
        if(complexRef.current){
            if(complexRef.current === complexTask){
                console.log("the complex fun is not re-create");
            }else{
                console.log("the complex is re-create");
            }
            
        }else{
            complexRef.current = complexTask
            console.log("complex.current = complexTask");
        }
    },[complexTask])




  return (
    <div className='space-y-4'>
     <input type="text"
     value={text}
     onChange={e => setText(e.target.value)}
     placeholder='Enter Any Latter'
      />
     <h1>Complex Task Result:{complexTask()}</h1>
     <button onClick={() => setCount(count+1)} className='border px-2'>Increment</button>
     <p>Count:{count}</p>
    </div>
  )
}

export default ComplexTaskComp

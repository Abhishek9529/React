import React, { useCallback, useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../features/pasteSlice';

    

const Home = () => {
    
    
    const [searchParams, setSearchParams] = useSearchParams();
    
    const pasteId = searchParams.get('pasteId');
    const dispatch = useDispatch()

    const pastes = useSelector((state)=> (state.paste.pastes))
    console.log(pastes);
    console.log(pasteId);
    const editPaste = pastes.filter((paste) =>{
        return paste._id === pasteId
    })

    console.log(editPaste);

    let [title, setTitle] = useState('');
    const [value, setValue] = useState('');

     useEffect(()=>{
      if(editPaste.length > 0){
        title = editPaste[0].title
    }
     }, [pasteId])

    // useCallback(()=>{
    
    // },[editPaste])

    
    
    function createPaste(){
        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString()
        }

        if(pasteId){
            // update
            dispatch(updateToPastes(paste))
        }else{
            // create
             if(title != '' && value != '')  dispatch(addToPastes(paste))
        }

        // after createtion/updation 
        setValue('')
        setTitle('')
        setSearchParams({});
    }

    return (
        <div >
            <div className='flex flex-row space-x-4'>
                {
                    pasteId != null ? 
                    <input type="text"
                    placeholder='Enter The Updated val of Title...'
                    value={value}
                    onChange={e => setTitle(e.target.value)}
                />
                : 
                <input type="text"
                    placeholder='Enter The Title...'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                
                }
                
                <button onClick={createPaste} className='border px-2 rounded-md'>
                    {
                        pasteId ? "Update paste" : "Create my Paste"
                    }
                </button>
            </div>

            <div className='mt-4'>
                {
                pasteId != null ?
                <textarea className='border rounded-md p-2'
                placeholder='Enter Content here...'
                value={value}
                
                onChange={e=> setValue(e.target.value)}
                rows={18}
                cols={45}
                ></textarea>
                :
                <textarea className='border rounded-md p-2'
                placeholder='Enter Content here...'
                value={value}
                onChange={e=> setValue(e.target.value)}
                rows={18}
                cols={45}
                ></textarea>
                }
                
            </div>

         


        </div>
    )
}

export default Home

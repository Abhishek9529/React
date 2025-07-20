import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../features/pasteSlice';



const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get('pasteId');
    const dispatch = useDispatch()

    const pastes = useSelector((state) => (state.paste.pastes))
    
    useEffect(() => {
        if (pasteId) {
        const findPaste = pastes.find((paste) => paste._id === pasteId )
            setTitle(findPaste.title)
            setValue(findPaste.content)
        }
    }, [pasteId])


    function createPaste() {
        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString()
        }

        if (pasteId) {
            // update
            dispatch(updateToPastes(paste))
        } else {
            // create
            if (title != '' && value != '') dispatch(addToPastes(paste))
        }

        // after createtion/updation 
        setValue('')
        setTitle('')
        setSearchParams({});
    }

    return (
        <div className='w-9/12 mx-auto  h-[450px]' >
            <div className=' flex flex-row justify-between'>
                <input className='border border-gray-400 outline-none px-2 w-10/12 rounded-md' type="text"
                    placeholder='Title...'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <button onClick={createPaste} className='border border-gray-400 px-4 py-2 rounded-md bg-blue-500 text-white text-sm font-semibold'>
                    {
                        pasteId ? "Update paste" : "Create my Paste"
                    }
                </button>
            </div>

            <div className='mt-4 border border-gray-400 rounded-md'>
                <div className='flex flex-row justify-between px-4 py-2 border-b-1 border-gray-400'>
                    <div className='flex flex-row'>
                        <p>o</p>
                        <p>o</p>
                        <p>o</p>
                    </div>
                    <div>
                        copy
                    </div>
                </div>
                <textarea className=' rounded-md p-2 outline-none'
                    placeholder='Enter Content here...'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    rows={13}
                    cols={125}
                ></textarea>
            </div>
        </div>
    )
}

export default Home

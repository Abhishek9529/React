import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeFromPastes} from '../features/pasteSlice'
import { useNavigate } from 'react-router-dom'

const Paste = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const pastes = useSelector((state) => state.paste.pastes)
    // console.log(pastes);
    const [searchTerm, setSearchTerm] = useState('')

    function handleFilter() {
        if (filteredData.length >= 1) {
            console.log(filteredData);
        } else {
            console.log("Paste not found");
        }
    }

    function handleDelete(id){
        dispatch(removeFromPastes(id))
    }
    function handleEdit(id){
        let path = `/?pasteId=${id}`;
        navigate(path);
    }
    function handleShare(){
        console.log("Share");
    }
    function handleCopy(copiedText){
        console.log("Copied text:", copiedText);
    }
    function handleView(){
        console.log("View");
    }

    const filteredData = pastes.filter(
        (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div className='space-x-4'>
            <div>
                <input className='border rounded-md px-2'
                    type="text"
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <button onClick={() => handleFilter()} className='border rounded-md px-2'>Search</button>
            </div>

            <div className='mt-4 border-t-1  pt-2'>
                <h1>Filtered Data: </h1>
                {
                    filteredData.length > 0 &&
                    filteredData.map(
                        (paste) => {
                            return (
                                <div key={paste._id} className='mt-4 border p-2 rounded-md'>
                                    <h1>{paste.title}</h1>
                                    <p>{paste.content}</p>
                                    <div className='space-x-2 mt-2'>
                                        <button onClick={()=> handleEdit(paste._id)} className='border px-2 rounded-md text-sm'>Edit</button>
                                        <button onClick={() => handleDelete(paste._id)} className='border px-2 rounded-md text-sm'>Delete</button>
                                        <button onClick={handleView} className='border px-2 rounded-md text-sm'>View</button>
                                        <button onClick={handleShare} className='border px-2 rounded-md text-sm'>Share</button>
                                        <button onClick={()=> handleCopy(paste.content)} className='border px-2 rounded-md text-sm'>Copy</button>
                                    </div>
                                    <div>
                                        <p className='text-sm mt-2'>{paste.createdAt}</p>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Paste

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../features/pasteSlice'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

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

    function handleDelete(id) {
        dispatch(removeFromPastes(id))
    }
    function handleEdit(id) {
        let path = `/?pasteId=${id}`;
        navigate(path);
    }
    async function handleShare(id) {
        const paste = pastes.find((p) => p._id === id)
        const shareData = {
            title: paste.title,
            text: paste.content,
            url: "https://developer.mozilla.org",
        };
        try {
            await navigator.share(shareData);
            toast.success("Paste ready for share")
        } catch (err) {
            toast("Paste not shared")
        }
    }
    function handleCopy(pasteContent) {
        navigator.clipboard.writeText(pasteContent)
        toast.success("copied to clipboard")
    }
    function handleView(id) {
        let path = `/pastes/${id}`;
        navigate(path);
    }

    function handleDate(inputDate) {
        const formatedDate = new Date(inputDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        return formatedDate
    }

    const filteredData = pastes.filter(
        (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
    );



    return (
        <div className=' w-9/12 mx-auto h-[480px] overflow-auto  '>
            <div>
                <input className='border border-gray-400 outline-none px-2 py-1 w-full rounded-md'
                    type="text"
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                {/* <button onClick={() => handleFilter()} className='border rounded-md px-2'>Search</button> */}
            </div>

            <div className='mt-4 border border-gray-400 rounded-md px-3 p-b-2  pt-2'>
                <h1 className='text-3xl border-b border-gray-400 pb-3 font-bold'>All Pastes: </h1>

                {
                    filteredData.length > 0 &&
                    filteredData.map(
                        (paste) => {
                            return (
                                <div key={paste._id} className='mt-4 flex flex-row justify-between border border-gray-400 p-2 rounded-md'>
                                    <div className=' w-6/12'>
                                        <h1 className='text-2xl font-bold'>{paste.title}</h1>
                                        <p className='text-gray-500'>{paste.content}</p>
                                    </div>

                                    <div className=''>
                                        <div className='space-x-2 mt-2'>
                                            <button onClick={() => handleEdit(paste._id)} className='border border-gray-400  px-2 py-1  font-mono rounded-md text-sm'><i class="ri-edit-line"></i></button>
                                            <button onClick={() => handleDelete(paste?._id)} className='border border-gray-400 px-2 py-1 font-mono rounded-md text-sm'><i class="ri-delete-bin-line"></i></button>
                                            <button onClick={() => handleView(paste._title, paste.content)} className='border border-gray-400 px-2 py-1 font-mono rounded-md text-sm'><i class="ri-eye-line"></i></button>
                                            <button onClick={() => handleShare(paste?._id)} className='border border-gray-400 px-2 py-1  font-mono rounded-md text-sm'><i class="ri-share-2-line"></i></button>
                                            <button onClick={() => handleCopy(paste.content)} className='border border-gray-400 px-2 py-1 font-mono rounded-md text-sm'><i class="ri-file-copy-line"></i></button>
                                        </div>
                                        <div>
                                            <p className='text-sm mt-2 text-right'><i class="ri-calendar-line pr-2"></i>{handleDate(paste.createdAt)}</p>
                                        </div>
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

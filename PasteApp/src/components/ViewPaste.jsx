import React from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'

const ViewPaste = () => {
  const {id} = useParams()
  const allPastes = useSelector((state)=> state.paste.pastes)
  const findPaste = allPastes.filter((paste) => paste._id === id)[0]

  function copyPaste(content){
    navigator.clipboard.writeText(content)
    toast.success("Content Successfully Copied")
  }

  return (
    <div>
      <div >
            <div className='flex flex-row space-x-4'>
                <input type="text"
                    placeholder='Enter The Title...'
                    value={findPaste.title}
                    disabled
                    onChange={e => setTitle(e.target.value)}
                />
                <button onClick={()=>copyPaste(findPaste.content)} className='border px-2 rounded-md'>
                    Copy
                </button>
            </div>

            <div className='mt-4'>
                <textarea className='border rounded-md p-2'
                    placeholder='Enter Content here...'
                    value={findPaste.content}
                    disabled
                    onChange={e => setValue(e.target.value)}
                    rows={18}
                    cols={45}
                ></textarea>
            </div>
        </div>
    </div>
  )
}

export default ViewPaste

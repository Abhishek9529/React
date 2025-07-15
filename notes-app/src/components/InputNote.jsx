import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addNote } from '../features/notesSlice'
import NotesList from './NotesList'

const InputNote = () => {
    const [isShow, setShowAll] = useState(false)
    const notes = useSelector((state) => state.notes)
    const dispatch = useDispatch()
    const [note, setNote] = useState('')
//    console.log(notes);
   
    function handleAddNote(){
    if(note !== ''){
       dispatch(addNote(note))
        setNote('')
    }
    }

    function handleShowAll(){
        setShowAll(!isShow)
    }

  return (
    <div className='mt-4'>
      <input type="text"
        value={note}
        placeholder='Write a note...'
        onChange={(e) => setNote(e.target.value)}
       />
      <button className='bg-green-500 text-balck px-1 rounded-md mr-2 ml-2' onClick={handleAddNote}>Add Note</button>
      <button className='bg-yellow-500 text-balck px-1 rounded-md' onClick={handleShowAll}>{isShow ? "Hide All" : "Show All" }</button>
      {
        isShow && <NotesList/>
      }
    </div>
  )
}

export default InputNote

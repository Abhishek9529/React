import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote } from '../features/notesSlice'

const Note = ({note}) => {
    const dispatch = useDispatch()

 function  handleDelete(id){
     dispatch(deleteNote(id))
  }
  return (
    <div >
        <div className='border p-2 w-[250px] rounded-md'>
         <p >{note.note}</p>
         <div>
            <button onClick={() => handleDelete(note.id)}>Delete</button>
         </div>
        </div>
    </div>
  )
}

export default Note

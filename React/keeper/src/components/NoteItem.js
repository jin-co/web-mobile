import React, { useContext } from 'react'
import { Card } from './Card'
import NoteContext from '../context/NoteContext'
import { FaTimes } from 'react-icons/fa'

export const NoteItem = ({ note }) => {
  const { deleteNote } = useContext(NoteContext)
  return (
    <Card>
      <div className="btn-box" onClick={() => deleteNote(note.id)} >
        <FaTimes className='delete'/>
      </div>
      <h3>
        {note.title}
      </h3>
      <p>
        {note.note}
      </p>
    </Card>
  )
}

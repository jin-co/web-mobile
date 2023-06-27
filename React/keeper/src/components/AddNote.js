import React, { useContext, useState } from 'react'
import NoteContext from '../context/NoteContext'
import { FaPlusSquare } from 'react-icons/fa'
import { v4 as uuid } from 'uuid'

export const AddNote = () => {
  const { addNote } = useContext(NoteContext)
  const [formData, setFormData] = useState({
    title: '',
    note: ''
  })

  const { title, note } = formData

  const onSubmit = (e) => {
    e.preventDefault()
    const newNote = {
      id: uuid(),
      title,
      note
    }
    addNote(newNote)
  }

  const onChange = (e) => {
    console.log(formData)
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <div className='add-note-container'>
      <form onSubmit={onSubmit}>
        <input id='title' type="text" placeholder='title' value={title} onChange={onChange} />
        <textarea id='note' placeholder='Note' value={note} onChange={onChange}></textarea>
        <button type='submit' className='submit-btn'>
          <FaPlusSquare />
        </button>
      </form>
    </div>
  )
}

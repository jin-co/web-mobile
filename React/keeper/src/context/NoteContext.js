import { createContext } from "react"
import { Notes } from '../data/note'
import { useState } from 'react'
const NoteContext = createContext()

export const NoteProvider = ({ children }) => {
  const [note, setNote] = useState(Notes)

  const addNote = (newNote) => {
    setNote([...note, newNote])
  }

  const deleteNote = (id) => {
    setNote(note.filter(n => n.id !== id))
  }

  return (
    <NoteContext.Provider value={{
      note,
      deleteNote,
      addNote
    }}>
      {children}
    </NoteContext.Provider>
  )
}

export default NoteContext

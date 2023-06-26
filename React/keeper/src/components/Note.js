import React, { useState } from 'react'
import { NoteItem } from './NoteItem'
import { Notes } from '../data/note'

export const Note = () => {
  const [note, setNote] = useState(Notes)
  return (
    <div className='notes'>
      {
        note.map(n => (
          <NoteItem key={n.id} note={n} />
        ))
      }
    </div>
  )
}

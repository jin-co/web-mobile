import React from 'react'
import { Card } from './Card'

export const NoteItem = ({ note }) => {
  return (
    <Card>
      <h3>
        {note.title}
      </h3>
      <p>
        {note.text}
      </p>
    </Card>
  )
}

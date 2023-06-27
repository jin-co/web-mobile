import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Note } from './components/Note'
import { AddNote } from './components/AddNote'
import { NoteProvider } from './context/NoteContext'

export const App = () => {
  return (
    <NoteProvider>
      <div className='container'>
        <Header />
        <main>
          <AddNote />
          <Note />
        </main>
        <Footer />
      </div>
    </NoteProvider>
  )
}

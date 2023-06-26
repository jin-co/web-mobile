import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Note } from './components/Note'

export const App = () => {
  return (
    <div className='container'>
      <Header />
      <main>
        <Note />
      </main>
      <Footer />
    </div>
  )
}

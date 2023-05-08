import React from 'react'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Nav } from './components/shared/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

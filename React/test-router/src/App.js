import React from 'react'
import Home from './Home'
import { About } from './About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from './Nav'

export const App = () => {
  return (
    <Router>
      <Nav/>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </Router>
  )
}

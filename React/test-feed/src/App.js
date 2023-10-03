import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Nav } from './components/Nav'
import { About } from './pages/About'

export const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Nav } from './Nav'

export const App = () => {
  return (
    <Router>
      <Nav />
      <main>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about/*' element={<About />} />
        </Routes>
      </main>
    </Router>
  )
}

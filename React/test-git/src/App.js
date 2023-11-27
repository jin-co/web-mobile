import React from 'react'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Notfound } from './pages/Notfound'
import { User } from './pages/User'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'

export const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/user' element={<User />} />
          <Route exact path='/*' element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  )
}

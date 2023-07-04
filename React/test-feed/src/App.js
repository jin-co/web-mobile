import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { About } from './pages/About'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <>
      <Router>
        <Header text="Hello" />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

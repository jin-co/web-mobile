import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { FeedProvider } from './context/FeedContext'

export const App = () => {
  return (
    <FeedProvider>
      <Router>
        <div>
          <Nav />
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
            </Routes>
          </div>
        </div>
      </Router>
    </FeedProvider>
  )
}
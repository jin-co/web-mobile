import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { About } from './pages/About'

export const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/' element={<About />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

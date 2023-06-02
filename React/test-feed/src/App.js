import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { Header } from './components/shared/Header'

export const App = () => {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

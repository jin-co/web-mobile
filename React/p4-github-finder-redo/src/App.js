import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
      </div>
      <main>
        <Routes>
          <Route />
        </Routes>
      </main>
    </Router>
  )
}

export default App

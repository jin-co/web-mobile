import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
      </div>
      <main className='container mx-auto px-3 pb-12'>
        <Routes>
          <Route />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App

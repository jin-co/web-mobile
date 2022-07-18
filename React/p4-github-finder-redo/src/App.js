import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Notfound from './pages/Notfound'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
      </div>
      <main className="container mx-auto px-3 pb-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notfound" element={<Notfound />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App

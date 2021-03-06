import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Notfound from './pages/Notfound'
import Footer from './components/layout/Footer'


const App = () => {  
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="mx-auto pb-12 container px-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<Notfound />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

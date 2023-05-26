import React from 'react'
import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { Alert } from './components/layout/Alert'
import { Home } from './pages/Home'
import { Notfound } from './pages/Notfound'
import { About } from './pages/About'
import { User } from './pages/User'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen bg-midnight">
        <Nav />
        <main className="container mx-auto px-3 pb-12">
          <Alert />
          <Routes>          
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route path="/user/:login" element={<User />} />
            <Route exact path="/notfound" element={<Notfound />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

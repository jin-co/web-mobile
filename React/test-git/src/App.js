import React from 'react'
import { Home } from './pages/Home'
import { Notfound } from './pages/Notfound'
import { About } from './pages/About'
import { User } from './pages/User'
import { Alert } from './components/layout/Alert'
import { Footer } from './components/layout/Footer'
import { Nav } from './components/layout/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/user/UserContext'

export const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Nav />
          <main className="container mx-auto px-3 pb-12">
            <Alert />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:login" element={<User />} />
              <Route path="/notfound" element={<Notfound />} />
              <Route path="/*" element={<Notfound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  )
}

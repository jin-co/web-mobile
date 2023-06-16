import React from 'react'
import { Nav } from './components/layout/Nav'
import { Alert } from './components/layout/Alert'
import { Notfound } from './pages/Notfound'
import { About } from './pages/About'
import { User } from './pages/User'
import { Home } from './pages/Home'
import { Footer } from './components/layout/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GitProvider } from './context/git/GitContext'
import { AlertProvider } from './context/alert/AlertContext'

export const App = () => {
  return (
    <AlertProvider>
      <GitProvider>
        <div className="flex flex-col justify-between h-screen">
          <Router>
            <Nav />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path='' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/*' element={<Notfound />} />
              </Routes>
            </main>
            <Footer />
          </Router>
        </div>
      </GitProvider>
    </AlertProvider>
  )
}

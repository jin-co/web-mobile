import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { FeedProvider } from './context/FeedContext'

export const App = () => {
  return (
    <FeedProvider>
      <div>
        <Router>
          <Header />
          <main>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
            </Routes>
          </main>
        </Router>
      </div>
    </FeedProvider>
  )
}

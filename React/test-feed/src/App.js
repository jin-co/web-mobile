import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { Header } from './components/shared/Header'
import { FeedProvider } from './context/FeedContext'

export const App = () => {
  return (
    <FeedProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </FeedProvider>
  )
}

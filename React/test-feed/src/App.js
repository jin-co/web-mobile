import Header from './components/shared/Header'
import FeedbackData from './data/FeedbackData'
import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './components/About'
import { FaQuestion } from 'react-icons/fa'
import { FeedbackProvider } from './components/context/FeedbackContext'

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <>
          <Header />
          <main className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedbackStats />
                    <FeedbackForm />
                    <FeedbackList />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Link to="/about" className="link">
            <FaQuestion />
          </Link>
        </>
      </Router>
    </FeedbackProvider>
  )
}

export default App

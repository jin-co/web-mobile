import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import Header from './components/shared/Header'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import { useState } from 'react'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeed = (newFeed) => {

  }

  const deleteFeed = (id) => {
    setFeedback(feedback.filter(f => f.id !== id))
  }

  const updateFeed = (id, newFeed) => {

  }


  return (
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
                  <FeedbackStats feedback={feedback} />
                  <FeedbackForm feedback={feedback} />
                  <FeedbackList feedback={feedback} handleDelete={deleteFeed} />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
          <Link to="/about">
            <FaQuestion />
          </Link>
        </main>
      </>
    </Router>
  )
}

export default App

import FeedbackData from './data/FeedbackData'
import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import Header from './components/shared/Header'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import About from './components/About'
import { FaQuestion } from 'react-icons/fa'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const addFeedback = (newFeed) => {
    setFeedback([newFeed, ...feedback])
  }

  return (
    <Router>
      <>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackStats feedback={feedback} />
                  <FeedbackForm feedback={feedback} handleAdd={addFeedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
        <div className='about-link'>
          <Link to="/about">
            <FaQuestion />
          </Link>
        </div>
      </>
    </Router>
  )
}

export default App

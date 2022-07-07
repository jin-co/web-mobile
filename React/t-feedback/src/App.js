import FeedbackForm from './component/FeedbackForm'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './component/FeedbackList'
import FeedbackItem from './component/FeedbackItem'
import FeedbackStats from './component/FeedbackStats'
import Header from './component/shared/Header'
import { useState } from 'react'
import About from './component/About'
import AboutLink from './component/AboutLink'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeed) => {
    setFeedback([newFeed, ...feedback])
  }

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const updateFeedback = (newFeed) => {}

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
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
          <Link to="/about">
            <AboutLink />
          </Link>
        </div>
      </>
    </Router>
  )
}

export default App

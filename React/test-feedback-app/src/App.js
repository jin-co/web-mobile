import React from 'react'
import Header from './components/shared/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import { useState } from 'react'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './components/About'
import { FaQuestion } from 'react-icons/fa'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <>
      <Router>
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
            ></Route>
            <Route path="/about" element={<About/>}></Route>
          </Routes>
        </div>
        <FaQuestion />
      </Router>
    </>
  )
}

export default App

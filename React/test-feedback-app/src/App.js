import React from 'react'
import Header from './components/shared/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import { useState } from 'react'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const addFeedback = (newFeedback) => {
    setFeedback([...feedback, newFeedback])
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackForm feedback={feedback} handleAdd={addFeedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App

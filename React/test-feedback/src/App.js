import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStat from './components/FeedbackStat'
import FeedbackData from './data/FeedbackData'
import Header from './components/shared/Header'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeed = (newFeed) => {
    setFeedback([newFeed, ...feedback])
  }

  const deleteFeed = (id) => {
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const updateFeed = (newFeed) => {
    // todo
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStat feedback={feedback} />
        <FeedbackForm feedback={feedback} handleAdd={addFeed} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeed} />
      </div>
    </>
  )
}

export default App

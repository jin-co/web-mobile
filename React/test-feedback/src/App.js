import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import { useState } from 'react'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { v4 as uuid } from 'uuid'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Sure?')) {
      setFeedback(feedback.filter((i) => i.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid()
    setFeedback([newFeedback, ...feedback])
    console.log(newFeedback)
  }

  return (
    <>
      <Header text="Hello" />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App

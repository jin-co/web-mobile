import FeedbackForm from './component/FeedbackForm'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './component/FeedbackList'
import FeedbackItem from './component/FeedbackItem'
import FeedbackStats from './component/FeedbackStats'
import Header from './component/shared/Header'
import { useState } from 'react'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeed) => {}

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter(f => f.id !== id))
  }

  const updateFeedback = (newFeed) => {}

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackForm />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App

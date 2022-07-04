import FeedbackData from './data/FeedbackData'
import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import Header from './components/shared/Header'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter(f => f.id !== id))
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App

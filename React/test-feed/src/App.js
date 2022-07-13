import Header from './components/shared/Header'
import FeedbackData from './data/FeedbackData'
import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeed) => {
    setFeedback(newFeed, ...feedback)
  }

  const deleteFeedback = () => {}

  const updateFeedback = () => {}


  return (
    <>
      <Header />
      <main className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackForm feedback={feedback} handleAdd={addFeedback}/>
        <FeedbackList feedback={feedback} />
      </main>
    </>
  )
}

export default App

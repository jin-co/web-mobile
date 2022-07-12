import Header from './components/shared/Header'
import FeedbackData from './data/FeedbackData'
import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header />
      <main className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackForm feedback={feedback} />
        <FeedbackList feedback={feedback} />
      </main>
    </>
  )
}

export default App

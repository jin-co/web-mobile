import FeedbackForm from './component/FeedbackForm'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './component/FeedbackList'
import FeedbackItem from './component/FeedbackItem'
import FeedbackStats from './component/FeedbackStats'
import Header from './component/shared/Header'
import { useState } from 'react'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats />
        <FeedbackForm />
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}

export default App

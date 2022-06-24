import Header from './components/shared/Header'
import FeedbackData from './data/FeedbackData'
import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { v4 as uuid } from 'uuid'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteItem = (id) => {
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const addItem = (newRating) => {
    console.log(newRating)
    newRating.id = uuid()    
    setFeedback([newRating, ...feedback])
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackForm handleAdd={addItem} />
        <FeedbackList feedback={feedback} handelDelete={deleteItem} />
      </div>
    </>
  )
}

export default App

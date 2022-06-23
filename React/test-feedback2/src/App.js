import Header from './components/shared/Header'
import FeedbackData from './data/FeedbackData'
import { useState } from 'react'
import FeedbackList from './components/FeedbackList'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteItem = (id) => {
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const addItem = () => {}

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList
          feedback={feedback}
          handelDelete={deleteItem}
          handelAdd={addItem}
        />
      </div>
    </>
  )
}

export default App

import FeedbackData from './data/FeedbackData'
import { useState } from 'react'
import  Header from './components/shared/Header'
import FeedbackList from './components/FeedbackList'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    if(window.confirm("Sure?")) {

      setFeedback(feedback.filter(f => f.id !== id))
    }
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

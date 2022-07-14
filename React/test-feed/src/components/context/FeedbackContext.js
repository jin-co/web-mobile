import { createContext, useState } from 'react'
import FeedbackData from '../../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = (props) => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeed) => {
    setFeedback([newFeed, ...feedback])
  }

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const updateFeedback = (id) => {}

  return (
    <FeedbackContext.Provider
      value={{ feedback, addFeedback, deleteFeedback, updateFeedback }}
    >
      {props.children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext

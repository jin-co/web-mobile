import { Children, createContext, useState } from 'react'
import FeedbackData from '../data/FeedbackData'
const Context = createContext()

export const Provider = (props) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback])
  }

  return (
  <Context.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback
  }}>{Children}</Context.Provider>
  )
}

export default Context

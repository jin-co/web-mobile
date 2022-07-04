import { Children, createContext, useState } from 'react'
import FeedbackData from '../data/FeedbackData'
const Context = createContext()

export const Provider = (props) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  return (
  <Context.Provider value={{
    feedback,
    deleteFeedback
  }}>{Children}</Context.Provider>
  )
}

export default Context

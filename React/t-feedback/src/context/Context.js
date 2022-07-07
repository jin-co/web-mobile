import { useState, createContext } from 'react'
import FeedbackData from '../data/FeedbackData'

const Context = createContext()

export const Provider = (props) => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeed) => {
    setFeedback([newFeed, ...feedback])
  }

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const updateFeedback = (newFeed) => {}

  return (
    <Context.Provider
      value={{ feedback, addFeedback, deleteFeedback, updateFeedback }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default Context

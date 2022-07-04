import { Children, createContext, useState } from 'react'
import FeedbackData from '../data/FeedbackData'
const Context = createContext()

export const Provider = (props) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
  <Context.Provider value={{
    feedback
  }}>{Children}</Context.Provider>
  )
}

export default Context

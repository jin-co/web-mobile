import { createContext, useState } from 'react'
import FeedbackData from '../../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = (props) => {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <FeedbackContext.Provider value={feedback}>
      {props.children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext

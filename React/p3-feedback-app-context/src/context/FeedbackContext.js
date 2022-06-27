import { createContext, useState } from 'react'
import FeedbackData from '../data/FeedbackData'
import { v4 as uuid } from 'uuid'

const FeedbackContext = createContext()

export const FeedackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const deleteFeedback = (id) => {
    if (window.confirm('Sure?')) {
      setFeedback(feedback.filter((i) => i.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid()
    setFeedback([newFeedback, ...feedback])
    console.log(newFeedback)
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext

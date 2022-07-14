import { createContext, useState } from 'react'
import FeedbackData from '../../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = (props) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  })

  const addFeedback = (newFeed) => {
    setFeedback([newFeed, ...feedback])
  }

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const updateFeedback = (id, upd) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...upd } : item))
    )
  }

  const feedbackEdit = (item) => {
    setEditFeedback({
      item,
      edit: true
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        editFeedback,
        addFeedback,
        deleteFeedback,
        updateFeedback,
        feedbackEdit,
      }}
    >
      {props.children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext

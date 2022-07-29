import { createContext } from 'react'
import { useState } from 'react'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = (props) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const [editMode, setEditMode] = useState({
    item: {},
    edit: false,
  })

  const getEditItem = (item) => {
    setEditMode({
      item: item,
      edit: true
    })
  }

  const addFeed = (newFeed) => {
    setFeedback([newFeed, ...feedback])
  }

  const deleteFeed = (id) => {
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const updateFeed = (id, newFeed) => {
    setFeedback(
      feedback.filter((f) =>
        f.id === id ? [...feedback, ...newFeed] : [...feedback]
      )
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        editMode,
        getEditItem,
        addFeed,
        deleteFeed,
        updateFeed,
      }}
    >
      {props.children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext

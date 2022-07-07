import { useState, createContext } from 'react'
import FeedbackData from '../data/FeedbackData'

const Context = createContext()

export const Provider = (props) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    isEdit: false,
  })

  const addFeedback = (newFeed) => {
    setFeedback([newFeed, ...feedback])
  }

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const updateFeedback = (newFeed) => {
    setEditFeedback({
      newFeed,
      isEdit: true
    })
  }

  return (
    <Context.Provider
      value={{
        feedback,
        editFeedback,
        addFeedback,
        deleteFeedback,
        updateFeedback,
        setEditFeedback
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default Context

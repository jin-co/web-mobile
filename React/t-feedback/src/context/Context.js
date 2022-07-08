import { useState, createContext } from 'react'
import FeedbackData from '../data/FeedbackData'

const Context = createContext()

export const Provider = (props) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const [editFeedback, setEditFeedback] = useState({
    feed: {},
    edit: false,
  })

  const addFeedback = (newFeed) => {
    setFeedback([newFeed, ...feedback])
  }

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const realUpdateFeed = (id, upd) => {
    setFeedback(feedback.map((i) => (i.id === id ? { ...i, ...upd } : i)))
  }

  const enableEditFeedback = (feed) => {
    setEditFeedback({
      feed,
      edit: true,
    })
  }

  return (
    <Context.Provider
      value={{
        feedback,
        editFeedback,
        addFeedback,
        deleteFeedback,
        realUpdateFeed,
        enableEditFeedback,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default Context

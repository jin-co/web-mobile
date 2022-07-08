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


  const realUpdateFeed = (id, upd) => {
    setFeedback(feedback.map((i) => (i.id === id ? { ...i, ...upd } : i)))
  }

  return (
    <Context.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
        realUpdateFeed,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default Context

import React from 'react'
import { createContext, useState } from 'react'
import FeedbackData from '../data/FeedbackData'

const FeedContext = createContext()

export const FeedProvider  = (props) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const [editMode, setEditMode] = useState({
    item: {},
    edit: false
  })

  const addFeed = (newFeed) => {
    setFeedback([newFeed, ...feedback])
  }

  const deleteFeed = (id) => {
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const updateFeed = (id, newFeed) => {
    setFeedback(feedback.map(feed => feed.id === id ? feed : [...feedback, newFeed]))
  }

  const getFeed = (id) => [

  ]

  return (
    <FeedContext.Provider value={{
      feedback,
      editMode,
      getFeed,
      addFeed,
      deleteFeed,
      updateFeed
    }}>
      {props.children}
    </FeedContext.Provider>
  )
}

export default FeedContext
import React from 'react'
import { createContext, useState } from 'react'
import FeedbackData from '../data/FeedbackData'

const FeedContext = createContext()

export const FeedProvider = (props) => {
  const [feed, setFeed] = useState(FeedbackData)

  const deleteFeed = (id) => {
    setFeed(feed.filter((f) => f.id !== id))
  }

  const addFeed = (newFeed) => {
    setFeed([newFeed, ...feed])
  }

  return (
    <FeedContext.Provider value={{
      feed,
      addFeed,
      deleteFeed
    }}>{props.children}</FeedContext.Provider>
  )
}

export default FeedContext

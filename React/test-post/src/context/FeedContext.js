import React from 'react'
import { createContext, useState } from 'react'
import FeedbackData from '../data/FeedbackData'
import { v4 as uuid } from 'uuid'

const FeedContext = createContext()

export const FeedProvider = (props) => {
  const [feed, setFeed] = useState(FeedbackData)

  const deleteFeed = (id) => {
    setFeed(feed.filter((f) => f.id !== id))
  }

  const addFeed = (newFeed) => {
    newFeed.id = uuid()
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

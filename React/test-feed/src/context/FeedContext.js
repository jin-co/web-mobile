import React, { createContext, useState } from 'react'
import FeedData from '../data/FeedbackData'

const FeedContext = createContext()

export const FeedProvider = ({ children }) => {
  const [feed, setFeed] = useState(FeedData)

  const deleteFeed = (id) => {
    setFeed(feed.filter(i => i.id !== id))
  }

  const addFeed = (newFeed) => {
    setFeed([newFeed, ...feed])
  }

  const updateFeed = (id, newFeed) => {
    setFeed(feed.map(f => f.id == id ? { ...f, ...newFeed } : { ...f }))
  }

  return (
    <FeedContext.Provider value={{
      feed,
      deleteFeed,
      addFeed,
      updateFeed
    }}>
      {children}
    </FeedContext.Provider>
  )
}

export default FeedContext

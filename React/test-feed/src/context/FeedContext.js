import React, { createContext, useState } from 'react'
import FeedData from '../data/FeedbackData'

const FeedContext = createContext()

export const FeedProvider = ({ children }) => {
  const [feed, setFeed] = useState(FeedData)
  const [getFeed, setGetFeed] = useState({
    id: null,
    text: '',
    rating: 0
  })

  const deleteFeed = (id) => {
    setFeed(feed.filter(i => i.id !== id))
  }

  const addFeed = (newFeed) => {
    setFeed([newFeed, ...feed])
  }

  const updateFeed = (id, newFeed) => {
    setFeed(feed.map(f => f.id == id ? { ...f, ...newFeed } : { ...f }))
  }

  const handleSetGetFeed = (feed) => {
    setGetFeed(feed)    
  }

  return (
    <FeedContext.Provider value={{
      feed,
      getFeed,
      deleteFeed,
      addFeed,
      updateFeed,
      handleSetGetFeed
    }}>
      {children}
    </FeedContext.Provider>
  )
}

export default FeedContext

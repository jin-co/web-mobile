import React, { createContext, useState } from 'react'
import FeedData from '../data/FeedbackData'

const FeedContext = createContext()

export const FeedProvider = ({ children }) => {
  const [feed, setFeed] = useState(FeedData)
  const [getFeed, setGetFeed] = useState({
    feed: {},
    isEdit: false
  })

  const addFeed = (newFeed) => {
    setFeed([newFeed, ...feed])
  }

  const deleteFeed = (id) => {
    setFeed(feed.filter(f => f.id !== id))
  }

  const updateFeed = (id, newFeed) => {
    setFeed(feed.map(f => f.id == id ? { ...f, newFeed } : { f }))
  }

  const handleSetGetFeed = (feed) => {
    console.log(feed)
    setGetFeed({
      feed,
      isEdit: true
    })
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

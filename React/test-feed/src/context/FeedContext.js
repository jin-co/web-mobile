import React, { createContext, useState } from 'react'
import FeedData from '../data/FeedbackData'

const FeedContext = createContext()

export const FeedProvider = ({ children }) => {
  const [feed, setFeed] = useState(FeedData)
  const [selectedFeed, setSelectedFeed] = useState({
    feed:{},
    isEdit: false
  })

  const addFeed = (newFeed) => {
    setFeed([newFeed, ...feed])
  }

  const deleteFeed = (id) => {
    setFeed(feed.filter(f => f.id !== id))
  }

  const updateFeed = (newFeed, id) => {
    setFeed(feed.map(f => f.id == id ? { ...newFeed } : f))
  }
  
  const handleSetSelectedFeed = (feed) => {
    setSelectedFeed({
      feed,
      isEdit:true
    })
  }

  return (
    <FeedContext.Provider value={{
      feed,
      selectedFeed,
      deleteFeed,
      addFeed,
      updateFeed,
      handleSetSelectedFeed
    }}>
      {children}
    </FeedContext.Provider>
  )
}

export default FeedContext

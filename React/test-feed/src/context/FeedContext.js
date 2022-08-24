import React from 'react'
import { createContext, useState } from 'react'
import FeedData from '../data/FeedbackData'

const FeedContext = createContext()

export const FeedProvider = (props) => {
  const [feed, setFeed] = useState(FeedData)

  const addFeed = (newFeed) => {
    setFeed([newFeed, ...feed])
  }

  const deleteFeed = (id) => {
    setFeed(feed.filter(f => f.id !== id))
  }

  return (
    <FeedContext.Provider value={{
      feed,
      addFeed,
      deleteFeed
    }}>
    {props.children}
    </FeedContext.Provider>
  )
}

export default FeedContext
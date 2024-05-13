import React, { createContext, useEffect, useState } from 'react'
import Feedback from '../data/FeedData'

const FeedContext = createContext()

export const FeedProvider = ({children}) => {
  const [feed, setFeed] = useState(Feedback)
  useEffect(() => {

  }, [])

  const deleteFeed = (id) => {
    setFeed(feed.filter(f => f.id != id))
  }

  const addFeed = (newFeed) => {
    setFeed([newFeed, ...feed])
  }

  const editFeed = () => {

  }

  return (
    <FeedContext.Provider
    value={{
      feed,
      addFeed,
      deleteFeed
    }}
    >
      {children}
    </FeedContext.Provider>
  )
}

export default FeedContext

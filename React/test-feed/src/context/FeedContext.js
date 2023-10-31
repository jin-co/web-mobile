import React, { createContext,  useState } from 'react'
import Feed from '../data/Feed'

const FeedContext = createContext()

export const FeedContextProvider = (props) => {
  const [feed, setFeed] = useState(Feed)  

  const deleteFeed = (id) => {
    setFeed(feed.filter(f => f.id !== id))
  }

  const addFeed = (newFeed) => {
    setFeed([newFeed, ...feed])
  }
  return (
    <FeedContext.Provider
      value={{
        feed,
        addFeed,
        deleteFeed
      }}
    >
      {props.children}
    </FeedContext.Provider>
  )
}

export default FeedContext
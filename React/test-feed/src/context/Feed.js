import { useState, createContext } from 'react'
import { Feed } from '../data/FeedData'
import { v4 as uuid } from 'uuid'

const FeedContext = createContext()

export const FeedProvider = (props) => {
  const [feed, setFeed] = useState(Feed)
  const [getFeed, setGetFeed] = useState({
    feed: {},
    isEdit: false
  })

  const addFeed = (newFeed) => {
    newFeed.id = uuid()
    setFeed([newFeed, ...feed])
  }

  const deleteFeed = (id) => {
    setFeed(feed.filter(f => f.id !== id))
  }

  const updateFeed = (id, newFeed) => {
    setFeed(feed.map(f => f.id === id ? { ...f, ...newFeed } : f))
    setGetFeed({
      feed: {},
      isEdit: false
    })
  }

  const selectFeed = (feed) => {
    setGetFeed({
      feed: feed,
      isEdit: true
    })
  }
  return (
    <FeedContext.Provider value={{
      feed,
      getFeed,
      addFeed,
      deleteFeed,
      selectFeed,
      updateFeed
    }}>
      {props.children}
    </FeedContext.Provider>
  )
}

export default FeedContext

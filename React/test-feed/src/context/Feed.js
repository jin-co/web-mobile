import { useState, createContext, useEffect } from 'react'
import { Feed } from '../data/FeedData'
import { v4 as uuid } from 'uuid'

const url = process.env.REACT_APP_URL + 'feeds/'

const FeedContext = createContext()

export const FeedProvider = (props) => {
  const [feed, setFeed] = useState([])
  const [getFeed, setGetFeed] = useState({
    feed: {},
    isEdit: false
  })

  useEffect(() => {
    getFeeds()
  }, [])

  const getFeeds = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setFeed(data)
  }

  const addFeed = async (newFeed) => {
    newFeed.id = uuid()
    setFeed([newFeed, ...feed])
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeed)
    })
  }

  const deleteFeed = async (id) => {
    setFeed(feed.filter(f => f.id !== id))
    await fetch(url + id, {
      method: 'DELETE',
    })
  }

  const updateFeed = async (id, newFeed) => {
    setFeed(feed.map(f => f.id === id ? { ...f, ...newFeed } : f))
    setGetFeed({
      feed: {},
      isEdit: false
    })
    await fetch(url + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeed)
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

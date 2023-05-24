import React, { createContext, useState, useEffect } from 'react'
import FeedData from '../data/FeedbackData'

const FeedContext = createContext()
const URL = 'http://localhost:4040/posts/'

export const FeedProvider = ({ children }) => {
  const [feed, setFeed] = useState([])
  const [getFeed, setGetFeed] = useState({
    id: null,
    text: '',
    rating: 0,
    isEdit: false
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await fetch(URL)
    const data = await res.json()
    setFeed(data)
  }

  const deleteFeed = async (id) => {
    await fetch(URL + id, {
      method: 'DELETE'
    })
    setFeed(feed.filter(i => i.id !== id))
  }

  const addFeed = async (newFeed) => {
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeed)
    })
    setFeed([newFeed, ...feed])
  }

  const updateFeed = async (id, newFeed) => {
    await fetch(URL + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeed)
    })
    setFeed(feed.map(f => f.id == id ? { ...f, ...newFeed } : { ...f }))

    setGetFeed({
      id: null,
      text: '',
      rating: 0,
      isEdit: false
    })
  }

  const handleSetGetFeed = (feed) => {
    setGetFeed({
      id: feed.id,
      text: feed.text,
      rating: feed.rating,
      isEdit: true,
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

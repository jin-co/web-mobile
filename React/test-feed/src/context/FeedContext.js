import React, { createContext, useContext, useEffect, useState } from 'react'
import FeedData from '../data/FeedbackData'

const FeedContext = createContext()
const url = process.env.REACT_APP_URL + 'feed/'

export const FeedProvider = ({ children }) => {
  const [feed, setFeed] = useState(FeedData)
  const [selectedFeed, setSelectedFeed] = useState({
    feed: {},
    isEdit: false
  })

  useEffect(() => {    
    fetchFeed()
    editFeed()
  }, [])

  const fetchFeed = async () => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
  }

  const plusFeed = async () => {
    const newFeed = {
      id: 11,
      text: 'what',
      rating: 2
    }
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeed)
    })    
  }

  const minusFeed = async() => {
    await fetch(url + '11', {
      method: 'DELETE',      
    })
  }

  const editFeed = async() => {
    await fetch(url + '3', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": 3,
      "rating": 7,
      "text": "Lo adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae."
      })
    })
  }

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
      isEdit: true
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

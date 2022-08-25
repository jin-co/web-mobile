import React from 'react'
import { createContext, useState, useEffect } from 'react'
import FeedData from '../data/FeedbackData'

const FeedContext = createContext()
const baseURL = 'http://localhost:5000/feedback/'

export const FeedProvider = (props) => {
  const [feed, setFeed] = useState([])
  const [getEditItem, setGetEditItem] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeeds()    
  }, [])

  const fetchFeeds = async () => {
    const res = await fetch(baseURL, {
      method:'GET'
    })
    const data = await res.json()
    setFeed(data)
  }

  const addFeed = async (newFeed) => {
    await fetch(baseURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newFeed)
    })
    setFeed([newFeed, ...feed])
  }

  const deleteFeed = async (id) => {
    await fetch(baseURL + id, {
      method: 'DELETE'            
    })    
    setFeed(feed.filter((f) => f.id !== id))
  }

  const fetchEditItem = (item) => {
    setGetEditItem({
      item,
      edit: true,
    })
  }

  const updateFeed = async (id, newFeed) => {
    const res = await fetch(baseURL + id, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newFeed)
    })
    setFeed(feed.map((f) => (f.id === id ? { ...f, ...newFeed } : f)))
  }

  return (
    <FeedContext.Provider
      value={{
        feed,
        getEditItem,
        addFeed,
        deleteFeed,
        fetchEditItem,
        updateFeed,
      }}
    >
      {props.children}
    </FeedContext.Provider>
  )
}

export default FeedContext

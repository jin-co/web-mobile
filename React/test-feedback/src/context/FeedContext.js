import React, { createContext, useEffect, useState } from 'react'
import Feedback from '../data/FeedData'

const URL = 'http://localhost:2040/Feed/'

const FeedContext = createContext()

export const FeedProvider = ({ children }) => {
  const [feed, setFeed] = useState(Feedback)
  const [isEdit, setIsEdit] = useState(false)
  const [selectedEditFeed, setSelectedEditFeed] = useState({
    id: '',
    text: '',
    rating: 0
  })

  useEffect(() => {
    getFeeds()
  }, [])

  const getFeeds = async () => {
    const res = await fetch(URL + '?_sort=createDtm&_order=desc')
    const data = await res.json()
    console.log(data)
    setFeed(data)
  }

  const deleteFeed = async (id) => {
    setFeed(feed.filter(f => f.id !== id))
    await fetch(URL + id, {
      method: 'DELETE'
    })
  }

  const handleEditFeedSelected = (feed) => {
    setSelectedEditFeed(feed)
    setIsEdit(true)
  }

  const addFeed = async (newFeed) => {
    console.log(new Date().toLocaleString('en-US', { hour12: false }))
    newFeed.createDtm = new Date().toLocaleString('en-US', { hour12: false })
    setFeed([newFeed, ...feed])
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeed)
    })
  }

  const editFeed = (updatedFeed) => {
    setFeed(feed.map(f => f.id === updatedFeed.id ? { ...updatedFeed } : f))
    setIsEdit(false)
    setSelectedEditFeed(null)
  }

  return (
    <FeedContext.Provider
      value={{
        feed,
        isEdit,
        selectedEditFeed,
        addFeed,
        deleteFeed,
        handleEditFeedSelected,
        editFeed
      }}
    >
      {children}
    </FeedContext.Provider>
  )
}

export default FeedContext

import React, { createContext, useEffect, useState } from 'react'
import Feedback from '../data/FeedData'

const ULR = 'http://localhost:2040/Feed'

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
    const res = await fetch(URL)    
    console.log('res: ', res)
    const data = await res.json()
    console.log(data)
  }

  const deleteFeed = (id) => {
    setFeed(feed.filter(f => f.id != id))
  }

  const handleEditFeedSelected = (feed) => {
    setSelectedEditFeed(feed)
    setIsEdit(true)
  }

  const addFeed = (newFeed) => {
    setFeed([newFeed, ...feed])
  }

  const editFeed = (updatedFeed) => {    
    setFeed(feed.map(f => f.id == updatedFeed.id ? { ...updatedFeed } : f))
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

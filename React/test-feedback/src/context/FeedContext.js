import React, { createContext, useEffect, useState } from 'react'
import Feedback from '../data/FeedData'

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

  }, [])

  const deleteFeed = (id) => {
    setFeed(feed.filter(f => f.id != id))
  }

  const handleEditFeedSelected = (feed) => {
    console.log(feed)
    setSelectedEditFeed(feed)
    setIsEdit(true)
    console.log(selectedEditFeed, isEdit)
  }

  const addFeed = (newFeed) => {
    setFeed([newFeed, ...feed])
  }

  const editFeed = () => {
    setFeed(feed.map(f => f.id == selectedEditFeed.id ? { ...selectedEditFeed } : f))
    setIsEdit(false)
  }

  return (
    <FeedContext.Provider
      value={{
        feed,
        isEdit,
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

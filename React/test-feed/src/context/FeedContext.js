import React from 'react'
import { createContext, useState } from 'react'
import FeedData from '../data/FeedbackData'

const FeedContext = createContext()

export const FeedProvider = (props) => {
  const [feed, setFeed] = useState(FeedData)
  const [getEditItem, setGetEditItem] = useState({
    item: {},
    edit: false,
  })

  const addFeed = (newFeed) => {
    setFeed([newFeed, ...feed])
  }

  const deleteFeed = (id) => {
    setFeed(feed.filter((f) => f.id !== id))
  }

  const fetchEditItem = (item) => {
    setGetEditItem({
      item,
      edit: true,
    })
  }

  const updateFeed = (id, newFeed) => {
    setFeed(feed.map((f) => f.id === id ? [...f, ...newFeed] : f))
  }

  return (
    <FeedContext.Provider
      value={{
        feed,
        getEditItem,
        addFeed,
        deleteFeed,
        fetchEditItem,
        updateFeed
      }}
    >
      {props.children}
    </FeedContext.Provider>
  )
}

export default FeedContext

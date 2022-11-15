import React from 'react'
import { createContext } from 'react'
import FeedData from '../../data/FeedbackData'
import { useState, useEffect } from 'react'

const FeedContext = createContext()

export const FeedProvider = (props) => {
  const [feed, setFeed] = useState(FeedData)
  const [isEdit, setIsEdit] = useState({
    feed: {},
    editOn: false,
  })

  const addFeed = (newFeed) => {
    setFeed([newFeed, ...feed])
  }

  const deleteFeed = (id) => {
    setFeed(feed.filter((f) => f.id !== id))
  }

  const updateFeed = (newFeed, id) => {
    console.log('update id: ', id)
    setFeed(feed.map((f) => (f.id === id ? {...f, ...newFeed} : f)))    
  }

  const turnOnIsEdit = (feed) => {
    setIsEdit({
      feed,
      editOn: true
    })
  }

  return (
    <FeedContext.Provider
      value={{
        feed,
        isEdit,
        addFeed,
        deleteFeed,
        updateFeed, 
        turnOnIsEdit       
      }}
    >
      {props.children}
    </FeedContext.Provider>
  )
}

export default FeedContext

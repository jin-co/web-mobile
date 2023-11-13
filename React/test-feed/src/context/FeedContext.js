import React, { createContext, useEffect, useState } from 'react'
import Feed from '../data/Feed'
const url = process.env.REACT_APP_API + 'feed/'

const FeedContext = createContext()

export const FeedContextProvider = (props) => {
  useEffect(() => {
    console.log(url)
  })
  const [feed, setFeed] = useState(Feed)
  const [selectEdit, setSelectEdit] = useState({
    isEdit: false,
    feed: {
    }
  })

  const deleteFeed = (id) => {
    setFeed(feed.filter(f => f.id !== id))
  }

  const addFeed = (newFeed) => {
    setFeed([newFeed, ...feed])
  }

  const editFeed = (updatedFeed) => {
    console.log(updatedFeed)
    setFeed(feed.map(f => f.id == updatedFeed.id ? { ...f, ...updatedFeed } : f))
  }

  const handleSelectedFeed = (feed) => {
    setSelectEdit({
      isEdit: true,
      feed
    })
  }

  return (
    <FeedContext.Provider
      value={{
        feed,
        selectEdit,
        handleSelectedFeed,
        addFeed,
        deleteFeed,
        editFeed
      }}
    >
      {props.children}
    </FeedContext.Provider>
  )
}

export default FeedContext
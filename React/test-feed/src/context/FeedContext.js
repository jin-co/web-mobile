import React, { createContext, useEffect, useState } from 'react'
import Feed from '../data/Feed'
const url = process.env.REACT_APP_API + 'feed/'

const FeedContext = createContext()

export const FeedContextProvider = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setFeed(data)
    }
    fetchData()
  }, [])
  const [feed, setFeed] = useState([])
  const [selectEdit, setSelectEdit] = useState({
    isEdit: false,
    feed: {
    }
  })

  const deleteFeed = async (id) => {
    await fetch(url + id, {
      method: 'DELETE'
    })
    setFeed(feed.filter(f => f.id !== id))
  }

  const addFeed = async (newFeed) => {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeed)
    })
    setFeed([newFeed, ...feed])
  }

  const editFeed = async (updatedFeed) => {
    await fetch(url + updatedFeed.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedFeed)
    })
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
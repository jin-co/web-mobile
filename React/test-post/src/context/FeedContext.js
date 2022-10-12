import React from 'react'
import { createContext, useState, useReducer } from 'react'
import FeedbackData from '../data/FeedbackData'
import { v4 as uuid } from 'uuid'
import Reducer from './Reducer'

const FeedContext = createContext()

export const FeedProvider = (props) => {
  const [feed, setFeed] = useState(FeedbackData)
  const [isEdit, setIsEdit] = useState({
    edit: false,
    feed: {
      rating: 0,
      text: '',
    },
  })

  const initialState = {
    feeds: [feed],
    feed: {},
  }

  const [state, dispatch] = useReducer(Reducer, initialState)

  const deleteFeed = (id) => {
    setFeed(feed.filter((f) => f.id !== id))
    dispatch({
      type: 'GET_FEEDS',
      payload: id,
    })
  }

  const addFeed = (newFeed) => {
    newFeed.id = uuid()
    setFeed([newFeed, ...feed])
  }

  const updateIsEdit = () => {
    setIsEdit()
  }

  const editFeed = (id, newFeed) => {
    setFeed(feed.map((f) => (f.id === id ? { ...f, ...newFeed } : f)))
  }

  return (
    <FeedContext.Provider
      value={{
        feed,
        addFeed,
        deleteFeed,
        editFeed,
      }}
    >
      {props.children}
    </FeedContext.Provider>
  )
}

export default FeedContext

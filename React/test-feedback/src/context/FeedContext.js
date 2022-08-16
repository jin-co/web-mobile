import React from 'react'
import { createContext, useState, useEffect } from 'react'
import FeedbackData from '../data/FeedbackData'

const FeedContext = createContext()
const URL = 'http://localhost:5000/feedback'

export const FeedProvider  = (props) => {
  const [feedback, setFeedback] = useState([])
  const [editMode, setEditMode] = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async() => {
    const res = await fetch(URL)
    const data = await res.json()
    setFeedback(data)
  }

  const addFeed = (newFeed) => {
    setFeedback([newFeed, ...feedback])
  }

  const deleteFeed = (id) => {
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const updateFeed = (id, newFeed) => {
    setFeedback(feedback.map(feed => feed.id === id ? feed : [...feedback, newFeed]))
  }

  const getFeed = (id) => [

  ]

  return (
    <FeedContext.Provider value={{
      feedback,
      editMode,
      getFeed,
      addFeed,
      deleteFeed,
      updateFeed
    }}>
      {props.children}
    </FeedContext.Provider>
  )
}

export default FeedContext
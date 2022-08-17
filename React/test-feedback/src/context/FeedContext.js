import React from 'react'
import { createContext, useState, useEffect } from 'react'
import FeedbackData from '../data/FeedbackData'

const FeedContext = createContext()
const URL = 'http://localhost:5000/feedback'

export const FeedProvider = (props) => {
  const [feedback, setFeedback] = useState([])
  const [editMode, setEditMode] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await fetch(URL + '?_sort=id&_order=desc')
    const data = await res.json()
    setFeedback(data)
  }

  const addFeed = async (newFeed) => {    
    setFeedback([newFeed, ...feedback])
    const res = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeed),
    })
    const data = await res.json()
  }

  const deleteFeed = async (id) => {
    setFeedback(feedback.filter((f) => f.id !== id))
    await fetch(URL + '/' + id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const updateFeed = (id, newFeed) => {
    setFeedback(
      feedback.map((feed) => (feed.id === id ? feed : [...feedback, newFeed]))
    )
  }

  const getFeed = (item) => {
    console.log('getFeed: ', item)
    setEditMode({ item: item, edit: true })
    console.log('edit item: ', editMode)
  }

  return (
    <FeedContext.Provider
      value={{
        feedback,
        editMode,
        getFeed,
        addFeed,
        deleteFeed,
        updateFeed,
        getFeed,
      }}
    >
      {props.children}
    </FeedContext.Provider>
  )
}

export default FeedContext

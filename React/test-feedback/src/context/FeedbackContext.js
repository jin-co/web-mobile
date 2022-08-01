import { createContext } from 'react'
import { useState, useEffect } from 'react'


const FeedbackContext = createContext()
const URL = 'https://localhost/5000/'

export const FeedbackProvider = (props) => {
  const [feedback, setFeedback] = useState([])
  const [editMode, setEditMode] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    setFeedback(fetchData())       
  }, [])

  const fetchData = async () => {
    const res = await fetch(URL)
    const data = await res.json()
    return data
  }

  const getEditItem = (item) => {
    setEditMode({
      item: item,
      edit: true
    })
  }

  const addFeed = (newFeed) => {
    setFeedback([newFeed, ...feedback])
  }

  const deleteFeed = (id) => {
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const updateFeed = (id, newFeed) => {
    setFeedback(
      feedback.map((f) =>
        f.id === id ? {...f, ...newFeed} : f
      )
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        editMode,
        getEditItem,
        addFeed,
        deleteFeed,
        updateFeed,
      }}
    >
      {props.children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext

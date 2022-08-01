import { createContext } from 'react'
import { useState, useEffect } from 'react'

const FeedbackContext = createContext()
const URL = 'http://localhost:5000/feedback/'

export const FeedbackProvider = (props) => {
  const [feedback, setFeedback] = useState([])
  const [editMode, setEditMode] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await fetch(URL + '?_order=desc')
    const data = await res.json()
    setFeedback(data)
    console.log(data)
  }

  const getEditItem = (item) => {
    setEditMode({
      item: item,
      edit: true,
    })
  }

  const addFeed = async (newFeed) => {
    // setFeedback([newFeed, ...feedback])
    const res = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeed),
    })
    const data = await res.json()
    setFeedback([data, ...feedback])
  }

  const deleteFeed = async (id) => {
    const res = await fetch(URL + `${id}`, {
      method: 'DELETE',
    })
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const updateFeed = async (id, newFeed) => {
    const res = await fetch(URL + `${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeed),
    })
    const data = await res.json()
    setFeedback(feedback.map((f) => (f.id === id ? { ...f, ...data } : f)))
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

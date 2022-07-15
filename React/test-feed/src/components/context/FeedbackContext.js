import { createContext, useState, useEffect } from 'react'
import FeedbackData from '../../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = (props) => {
  const [feedback, setFeedback] = useState([])
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await fetch('feedback?_sort=id&_order=desc')
    const data = await res.json()
    setFeedback(data)
  }

  const addFeedback = async (newFeed) => {
    const res = await fetch('feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeed),
    })

    const data = await res.json()
    setFeedback([newFeed, ...data])
  }

  const deleteFeedback = async (id) => {
    await fetch('feedback/' + id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })

    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const updateFeedback = (id, upd) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...upd } : item))
    )
  }

  const feedbackEdit = (item) => {
    setEditFeedback({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        editFeedback,
        addFeedback,
        deleteFeedback,
        updateFeedback,
        feedbackEdit,
      }}
    >
      {props.children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext

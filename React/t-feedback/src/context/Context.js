import { useState, createContext, useEffect } from 'react'
import FeedbackData from '../data/FeedbackData'

const Context = createContext()

export const Provider = (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState(FeedbackData)
  const [editFeedback, setEditFeedback] = useState({
    feed: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    const res = await fetch('feedback?_sort=id&_order=desc')
    const data = await res.json()
    setFeedback(data)
    setIsLoading(false)
  }

  const addFeedback = async (newFeed) => {
    const res = await fetch('feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeed),
    })
    const data = await res.json()
    setFeedback([data, ...feedback])
  }

  const deleteFeedback = async (id) => {
    await fetch('feedback/' + id, {method: 'DELETE'})
    
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const realUpdateFeed = async (id, upd) => {
    const res = await fetch('feedback/' + id, {
      method:'PUT',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(upd)
    })
    const data = await res.json()
    setFeedback(feedback.map((i) => (i.id === id ? { ...i, ...data } : i)))
  }

  const enableEditFeedback = (feed) => {
    setEditFeedback({
      feed,
      edit: true,
    })
  }

  return (
    <Context.Provider
      value={{
        feedback,
        editFeedback,
        isLoading,
        addFeedback,
        deleteFeedback,
        realUpdateFeed,
        enableEditFeedback,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default Context

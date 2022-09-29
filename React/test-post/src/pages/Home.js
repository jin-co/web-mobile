import React from 'react'
import FeedbackList from '../components/FeedbackList'
import FeedbackStats from '../components/FeedbackStats'
import FeedbackForm from '../components/FeedbackForm'
import FeedbackData from '../data/FeedbackData'
import { useState } from 'react'

const Home = () => {
  const [feed, setFeed] = useState(FeedbackData)

  const deleteFeed = (id) => {
    setFeed(feed.filter((f) => f.id !== id))
  }

  const addFeed = (newFeed) => {
    setFeed([newFeed, ...feed])
  }

  return (
    <>
      <FeedbackStats feed={feed} />
      <FeedbackForm feed={feed} handleAdd={addFeed} />
      <FeedbackList feed={feed} handleDelete={deleteFeed} />
    </>
  )
}

export default Home

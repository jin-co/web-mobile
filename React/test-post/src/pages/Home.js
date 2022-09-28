import React from 'react'
import FeedbackList from '../components/FeedbackList'
import FeedbackStats from '../components/FeedbackStats'
import FeedbackForm from '../components/FeedbackForm'
import FeedbackData from '../data/FeedbackData'
import { useState } from 'react'

const Home = () => {
  const [feed, setFeed] = useState(FeedbackData)
  return (
    <>
      <FeedbackStats feed={feed} />
      <FeedbackForm feed={feed} />
      <FeedbackList feed={feed} />
    </>
  )
}

export default Home

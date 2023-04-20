import React from 'react'
import { FeedbackList } from './FeedbackList'
import { FeedbackForm } from './FeedbackForm'
import FeedData from '../data/FeedbackData'
import { useState } from 'react'

export const Home = () => {
  const [feed, setFeed] = useState(FeedData)
  return (
    <>
      <FeedbackList />
      <FeedbackForm feed={feed} />
    </>
  )
}

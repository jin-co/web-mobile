import React from 'react'
import { FeedbackList } from './FeedbackList'
import { FeedbackForm } from './FeedbackForm'
import { useState } from 'react'
import FeedbackData from '../data/FeedbackData'

export const Home = () => {
  const [feed, SetFeed] = useState(FeedbackData)

  return (
    <div>
      <FeedbackList feed={feed} />
      <FeedbackForm />
    </div>
  )
}

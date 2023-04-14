import React from 'react'
import { FeedbackList } from './FeedbackList'
import { FeedbackForm } from './FeedbackForm'


export const Home = () => {
  return (
    <div>
      <FeedbackList />
      <FeedbackForm />
    </div>
  )
}

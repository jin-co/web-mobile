import React from 'react'
import { FeedbackList } from './FeedbackList'
import { FeedbackForm } from './FeedbackForm'
import { FeedbackStats } from './FeedbackStats'

export const Home = () => {  

  return (
    <>
      <FeedbackStats />
      <FeedbackForm />
      <FeedbackList />
    </>
  )
}

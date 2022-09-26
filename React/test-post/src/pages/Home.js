import React from 'react'
import FeedbackStats from '../components/FeedbackStats'
import FeedbackForm from '../components/FeedbackForm'
import FeedbackList from '../components/FeedbackList'

const Home = () => {
  return (
    <div>
      <FeedbackStats />
      <FeedbackForm />
      <FeedbackList />
    </div>
  )
}

export default Home

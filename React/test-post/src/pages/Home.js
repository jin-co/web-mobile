import React from 'react'
import FeedbackList from '../components/FeedbackList'
import FeedbackStats from '../components/FeedbackStats'
import FeedbackForm from '../components/FeedbackForm'

const Home = () => {
  return (
    <>
      <FeedbackStats />
      <FeedbackForm />
      <FeedbackList />
    </>
  )
}

export default Home

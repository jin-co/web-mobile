import React from 'react'
import FeedData from '../data/FeedbackData'
import FeedList from '../components/feeds/FeedList'
import { useState } from 'react'
import FeedStats from '../components/feeds/FeedStats'
import FeedForm from '../components/feeds/FeedForm'

const Home = () => {
  const [feed, setFeed] = useState([FeedData])
  return (
    <div>
      <FeedStats />
      <FeedForm />
      <FeedList />
    </div>
  )
}

export default Home

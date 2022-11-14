import React from 'react'
import FeedList from '../components/feeds/FeedList'
import FeedStats from '../components/feeds/FeedStats'
import FeedForm from '../components/feeds/FeedForm'

const Home = () => {
  return (
    <div>
      <FeedStats />
      <FeedForm />
      <FeedList />
    </div>
  )
}

export default Home

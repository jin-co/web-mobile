import React from 'react'
import FeedData from '../data/FeedbackData'
import FeedList from '../components/feeds/FeedList'
import { useState } from 'react'
import FeedStats from '../components/feeds/FeedStats'
import FeedForm from '../components/feeds/FeedForm'

const Home = () => {
  const [feed, setFeed] = useState(FeedData)

  const addFeed = (newFeed) => {
    setFeed([newFeed, ...feed])
  }

  const deleteFeed = (id) => {
    setFeed(feed.filter((f) => f.id !== id))
  }

  return (
    <div>
      <FeedStats feed={feed} />
      <FeedForm feed={feed} handleAdd={addFeed} />
      <FeedList feed={feed} handleDelete={deleteFeed} />
    </div>
  )
}

export default Home

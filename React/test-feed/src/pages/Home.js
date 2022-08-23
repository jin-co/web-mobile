import React from 'react'
import FeedData from '../data/FeedbackData'
import { useEffect, useState } from 'react'
import FeedList from '../component/FeedList'
import FeedForm from '../component/FeedForm'
import FeedStats from '../component/FeedStats'

const Home = () => {
  const [feed, setFeed] = useState(FeedData)

  const deleteFeed = (id) => {
    setFeed(feed.filter(f => f.id !== id))
  }

  return (
    <>
      <FeedStats feed={feed} />
      <FeedForm feed={feed} />
      <FeedList feed={feed} handleDelete={deleteFeed} />
    </>
  )
}

export default Home

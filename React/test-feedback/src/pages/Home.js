import React, { useEffect, useState } from 'react'
import Feedback from '../data/FeedData'
import { FeedList } from '../components/feed/FeedList'
import { FeedStats } from '../components/feed/FeedStats'
import { FeedForm } from '../components/feed/FeedForm'

export const Home = () => {
  const [feed, setFeed] = useState(Feedback)
  
  return (
    <div className="container">
      <FeedForm />
      <FeedStats />
      <FeedList feed={feed} />
    </div>
  )
}

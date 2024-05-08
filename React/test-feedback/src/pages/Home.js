import React, { useEffect, useState } from 'react'
import Feedback from '../data/FeedData'
import { FeedList } from '../components/feed/FeedList'
import { FeedStats } from '../components/feed/FeedStats'
import { FeedForm } from '../components/feed/FeedForm'

export const Home = () => {
  const [feed, setFeed] = useState(Feedback)

  const deleteFeed = (id) => {
    setFeed(feed.filter(f => f.id != id))
  }

  const addFeed = (feed) => {
    console.log(feed)
    setFeed(feed.push(feed))
  }

  return (
    <div className="container">
      <FeedForm addFeed = {addFeed} />
      <FeedStats feed={feed} />
      <FeedList feed={feed} deleteFeed={deleteFeed} />
    </div>
  )
}

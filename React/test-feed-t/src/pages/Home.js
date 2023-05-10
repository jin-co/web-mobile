import React from 'react'
import FeedData from '../data/FeedbackData'
import { useState } from 'react'
import { FeedList } from '../components/feed/FeedList'
import { FeedForm } from '../components/feed/FeedForm'
import { FeedStat } from '../components/feed/FeedStat'

export const Home = () => {
  const [feed, setFeed] = useState(FeedData)

  const addFeed = (newFeed) => {
    setFeed([newFeed, ...feed])
  }

  const deletedFeed = (id) => {
    setFeed(feed.filter(f => f.id !== id))
  }

  return (
    <>
      <FeedStat feed={feed} />
      <FeedForm addFeed={addFeed} />
      <FeedList feed={feed} deleteFeed={deletedFeed} />
    </>
  )
}

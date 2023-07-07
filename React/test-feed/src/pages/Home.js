import React, { useEffect, useState } from 'react'
import { FeedList } from '../components/FeedList'
import { FeedForm } from '../components/FeedForm'
import { FeedStat } from '../components/FeedStat'
import { Feed } from '../data/FeedData'

export const Home = () => {
  const [feed, setFeed] = useState(Feed)

  const addFeed = (newFeed) => {
    setFeed([newFeed, ...feed])
  }

  const deleteFeed = (id) => {
    setFeed(feed.filter(f => f.id !== id))
  }

  const updateFeed = (id, newFeed) => {
    setFeed(feed.map(f => f.id === id ? { ...newFeed } : f))
  }

  return (
    <>
      <FeedStat feed={feed} />
      <FeedForm addFeed={addFeed} />
      <FeedList feed={feed} deleteFeed={deleteFeed} />
    </>
  )
}

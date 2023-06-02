import React, { useState } from 'react'
import { FeedList } from '../FeedList'
import { FeedStat } from '../FeedStat'
import { FeedForm } from '../FeedForm'
import FeedData from '../data/FeedbackData'

export const Home = () => {
  const [feed, setFeed] = useState(FeedData)

  const addFeed = (newFeed) => {
    setFeed(...feed, newFeed)
  }

  const deleteFeed = (id) => {
    setFeed(feed.filter(f => f.id !== id))
  }

  const updateFeed = (id, newFeed) => {
    setFeed(feed.map(f => f.id == id ? { ...f, newFeed } : { f }))
  }

  return (
    <>
      <FeedStat feed={feed} />
      <FeedForm />
      <FeedList feed={feed} />
    </>
  )
}

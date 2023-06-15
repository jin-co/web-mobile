import React, { useState } from 'react'
import { FeedList } from '../components/FeedList'
import { FeedForm } from '../components/FeedForm'
import { FeedStat } from '../components/FeedStat'
import FeedData from '../data/FeedbackData'

export const Home = () => {
  const [feed, setFeed] = useState(FeedData)

  const addFeed = (newFeed) => {
    setFeed([newFeed, ...feed])
  }

  const deleteFeed = (id) => {
    setFeed(feed.filter(f => f.id !== id))
  }

  const updateFeed = (newFeed, id) => {
    setFeed(feed.map(f => f.id == id ? { ...newFeed } : f))
  }

  return (
    <div className="container">
      <FeedStat feed={feed} />
      <FeedForm feed={feed} handleAdd={addFeed}  />
      <FeedList feed={feed} handleDelete={deleteFeed} />
    </div>
  )
}

import React from 'react'
import { FeedbackList } from './FeedbackList'
import { FeedbackForm } from './FeedbackForm'
import { FeedbackStats } from './FeedbackStats'
import FeedData from '../data/FeedbackData'
import { useState } from 'react'

export const Home = () => {
  const [feed, setFeed] = useState(FeedData)

  const deleteFeed = (id) => {
    setFeed(feed.filter(i => i.id !== id))
  }

  const addFeed = (newFeed) => {
    setFeed(feed.push(newFeed))
  }

  const updateFeed = (id, newFeed) => {
    setFeed(feed.map(f => f.id == id ? { ...f, ...newFeed } : { ...f }))
  }

  return (
    <>
      <FeedbackStats feed={feed} />
      <FeedbackList feed={feed} deleteFeed={deleteFeed} />
      <FeedbackForm feed={feed} />
    </>
  )
}

import React from 'react'
import { FeedbackList } from './FeedbackList'
import { FeedbackForm } from './FeedbackForm'
import { FeedbackStats } from './FeedbackStats'
import FeedData from '../data/FeedbackData'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { About } from './About'

export const Home = () => {
  const [feed, setFeed] = useState(FeedData)

  const deleteFeed = (id) => {
    setFeed(feed.filter(i => i.id !== id))
  }

  const addFeed = (newFeed) => {
    setFeed([newFeed, ...feed])
  }

  const updateFeed = (id, newFeed) => {
    setFeed(feed.map(f => f.id == id ? { ...f, ...newFeed } : { ...f }))
  }

  return (
    <>
      <FeedbackStats feed={feed} />
      <FeedbackForm feed={feed} addFeed={addFeed} />
      <FeedbackList feed={feed} deleteFeed={deleteFeed} />
    </>
  )
}

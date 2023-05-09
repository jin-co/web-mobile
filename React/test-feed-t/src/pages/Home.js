import React from 'react'
import FeedData from '../data/FeedbackData'
import { useState } from 'react'
import { FeedList } from '../components/feed/FeedList'
import { FeedForm } from '../components/feed/FeedForm'
import { FeedStat } from '../components/feed/FeedStat'

export const Home = () => {
  const [feed, setFeed] = useState(FeedData)
  return (
    <>
      <FeedStat feed = {feed} />
      <FeedForm />
      <FeedList feed = {feed} />
    </>
  )
}

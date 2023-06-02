import React, { useState } from 'react'
import { FeedList } from '../FeedList'
import { FeedStat } from '../FeedStat'
import { FeedForm } from '../FeedForm'
import FeedData from '../data/FeedbackData'

export const Home = () => {
  const [feed, setFeed] = useState(FeedData)

  return (
    <>
      <FeedStat feed={feed} />
      <FeedForm />
      <FeedList feed={feed} />
    </>
  )
}

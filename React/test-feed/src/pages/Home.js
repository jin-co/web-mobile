import React, { useEffect, useState } from 'react'
import { FeedForm } from '../components/FeedForm'
import { FeedList } from '../components/FeedList'
import { FeedStat } from '../components/FeedStat'

import FeedData from '../data/feed'

export const Home = () => {
  const [feed, setFeed] = useState([])
  useEffect(() => {
    setFeed(FeedData)
    console.log(FeedData)
    console.log(feed)
  }, [])

  return (
    <div className='container'>
      <FeedStat />
      <FeedForm />
      <FeedList />
    </div>
  )
}

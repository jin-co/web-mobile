import React, { useEffect, useState } from 'react'
import { FeedForm } from '../components/FeedForm'
import { FeedList } from '../components/FeedList'
import { FeedStat } from '../components/FeedStat'

import Feed from '../data/Feed'

export const Home = () => {
  const [feed, setFeed] = useState(Feed)
  useEffect(() => {
    console.log(feed)
  }, [])

  const deleteFeed = (id) => {
    setFeed(feed.filter(f => f.id !== id))
  }

  const addFeed = (newFeed) => {
    setFeed([newFeed, ...feed])
  }

  return (
    <div className='container'>
      <FeedStat feed={feed} />
      <FeedForm addFeed={addFeed} />
      <FeedList feed={feed} deleteFeed={deleteFeed} />
    </div>
  )
}

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

  return (
    <div className='container'>
      <FeedStat feed={feed} />
      <FeedForm />
      <FeedList />
    </div>
  )
}

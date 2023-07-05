import React, { useEffect, useState } from 'react'
import { FeedList } from '../components/FeedList'
import { FeedForm } from '../components/FeedForm'
import { FeedRating } from '../components/FeedRating'
import { Feed } from '../data/FeedData'

export const Home = () => {
  const [feed, setFeed] = useState(Feed)
  useEffect(() => {
    console.log(feed)
  }, [])
  return (
    <>
      <FeedRating feed={feed} />
      <FeedForm />
      <FeedList feed={feed} />
    </>
  )
}

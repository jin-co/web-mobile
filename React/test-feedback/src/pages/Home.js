import React, { useContext, useEffect, useState } from 'react'
import { FeedList } from '../components/feed/FeedList'
import { FeedStats } from '../components/feed/FeedStats'
import { FeedForm } from '../components/feed/FeedForm'
import FeedContext from '../context/FeedContext'

export const Home = () => {
  const { feed } = useContext(FeedContext)
  return (
    <div className="container">
      <FeedForm />
      <FeedStats feed={feed} />
      <FeedList feed={feed} />
    </div>
  )
}

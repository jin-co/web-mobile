import React from 'react'
import { FeedForm } from '../components/FeedForm'
import { FeedList } from '../components/FeedList'
import { FeedStat } from '../components/FeedStat'

export const Home = () => {
  return (
    <div className='container'>
      <FeedStat />
      <FeedForm />
      <FeedList />
    </div>
  )
}

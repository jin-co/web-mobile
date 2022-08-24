import React from 'react'
import { useEffect, useState } from 'react'
import FeedList from '../component/FeedList'
import FeedForm from '../component/FeedForm'
import FeedStats from '../component/FeedStats'

const Home = () => {  
  return (
    <>
      <FeedStats />
      <FeedForm />
      <FeedList />
    </>
  )
}

export default Home

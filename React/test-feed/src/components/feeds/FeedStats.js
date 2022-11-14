import React from 'react'
import { useContext } from 'react'
import FeedContext from '../Context/FeedContext'

const FeedStats = () => {
  const { feed } = useContext(FeedContext)
  const average =
    feed.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feed.length

  return (
    <div>
      <p> total: {feed.length} </p>
      <p> average: {average} </p>
    </div>
  )
}

export default FeedStats

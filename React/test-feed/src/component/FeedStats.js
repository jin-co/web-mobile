import React from 'react'
import { useContext } from 'react'
import FeedContext from '../context/FeedContext'

const FeedStats = () => {
  const { feed } = useContext(FeedContext)

  let average =
    feed.reduce((arr, cur) => {
      return arr + cur.rating
    }, 0) / feed.length

  average = average.toFixed(1)

  return (
    <div>
      <p>total: {feed.length}</p>
      <p>avg: {isNaN(average) ? 0 : average}</p>
    </div>
  )
}

export default FeedStats

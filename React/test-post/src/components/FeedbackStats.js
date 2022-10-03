import React from 'react'
import { useContext } from 'react'
import FeedContext from '../context/FeedContext'

const FeedbackStats = () => {
  const {feed} = useContext(FeedContext)

  let average =
    feed.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feed.length
  average = average.toFixed(1)
  
  return (
    <div>
      <p>{isNaN(average) ? 0 : average}</p>
    </div>
  )
}

export default FeedbackStats

import React, { useContext } from 'react'
import FeedContext from '../context/FeedContext'

export const FeedStat = () => {
  const { feed } = useContext(FeedContext)
  let average = feed.reduce((acc, cur) => {
    return (acc + cur.rating) / feed.length
  }, 0)
  average = average.toFixed(2)
  return (
    <div className="feedback-stats">
      <h4>{feed.length} Reviews</h4>
      <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

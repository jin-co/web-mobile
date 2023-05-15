import React from 'react'
import { useContext } from 'react'
import FeedContext from '../context/FeedContext'

export const FeedbackStats = () => {
  const { feed } = useContext(FeedContext)
  let avg = feed.reduce((acc, cur) => {
    return (acc + cur.rating) / feed.length
  }, 0)
  avg = avg.toFixed(1)
  return (
    <div className="feedback-stats">
      <h4>{feed.length} Reviews</h4>
      <h4>Avg: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  )
}

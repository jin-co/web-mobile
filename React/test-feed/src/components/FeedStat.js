import React from 'react'

export const FeedStat = ({ feed }) => {
  let avg = feed.reduce((acc, cur) => {
    return (acc + cur.rating) / feed.length
  }, 0)
  avg = avg.toFixed(2)
  return (
    <div className="feedback-stats">
      <h4>{feed.length} Reviews</h4>
      <h4>Average rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  )
}

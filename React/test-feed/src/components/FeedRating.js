import React from 'react'

export const FeedRating = ({ feed }) => {
  let avg = feed.reduce((acc, cur) => {
    return (acc + cur.rating) / feed.length
  }, 0)
  avg = avg.toFixed(2)
  return (
    <div className="feedback-stats">
      <p>
        {isNaN(avg) ? 0 : avg}
      </p>
      <p>
        {feed.length}
      </p>
    </div>
  )
}

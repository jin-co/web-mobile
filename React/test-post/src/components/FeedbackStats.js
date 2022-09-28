import React from 'react'

const FeedbackStats = ({ feed }) => {
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

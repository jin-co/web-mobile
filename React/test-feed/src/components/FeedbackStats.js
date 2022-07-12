import React from 'react'

const FeedbackStats = ({ feedback }) => {
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length
  average = average.toFixed(1)
  return (
    <div>
      <p>Average: {isNaN(average) ? 0 : average}</p>
      <p>Feedback ({feedback.length})</p>
    </div>
  )
}

export default FeedbackStats

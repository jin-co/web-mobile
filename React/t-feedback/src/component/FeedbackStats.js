import React from 'react'

const FeedbackStats = ({ feedback }) => {
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length
  average = average.toFixed(1)

  return (
    <div className="stats">
      <p className="average-display"> Feedback( {feedback.length} )</p>
      <p className="rating-display">
        {' '}
        Average rating: {isNaN(average) ? 0 : average}{' '}
      </p>
    </div>
  )
}

export default FeedbackStats

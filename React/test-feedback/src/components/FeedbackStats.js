import React from 'react'
import Card from './shared/Card'

const FeedbackStats = ({ feedback }) => {
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length
  average = average.toFixed(1)
  return (
    <div className='stats'>
      <p>Ratings: {feedback.length}</p>
      <p>Average rating{isNaN(average) ? 0 : average}</p>
    </div>
  )
}

export default FeedbackStats

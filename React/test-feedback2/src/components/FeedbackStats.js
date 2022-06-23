import React from 'react'
import Card from './shared/Card'

const FeedbackStats = ({ feedback }) => {
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className="feedback-stats">
      <h4>Feedbacks {feedback.length}</h4>
      <h4>Average: {isNaN(average) ? 0 : average} </h4>
    </div>
  )
}

export default FeedbackStats

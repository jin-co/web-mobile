import React from 'react'
import { useContext } from 'react'
import Context from '../context/Context'

const FeedbackStats = () => {
  const {feedback} = useContext(Context)

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

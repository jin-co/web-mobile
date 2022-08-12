import React from 'react'
import { useContext } from 'react'
import FeedContext from '../context/FeedContext'

const FeedbackStat = () => {
  const {feedback} = useContext(FeedContext)
  let average =
    feedback.reduce((arr, cur) => {
      return arr + cur.rating
    }, 0) / feedback.length
  average = average.toFixed(1)

  return (
    <div>
      <p>Average: {isNaN(average) ? 0 : average}</p>
      <p>Feedback: {feedback.length}</p>
    </div>
  )
}

export default FeedbackStat

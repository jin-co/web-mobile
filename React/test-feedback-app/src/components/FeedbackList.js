import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback }) => {
  return (
    <ul>
      {feedback.map((i) => (
        <FeedbackItem feedback={i} />
      ))}
    </ul>
  )
}

export default FeedbackList

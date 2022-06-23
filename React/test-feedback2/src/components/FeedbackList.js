import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback }) => {
  return (
    <ul>
      {feedback.map((item) => (
        <FeedbackItem item={item} />
      ))}
    </ul>
  )
}

export default FeedbackList

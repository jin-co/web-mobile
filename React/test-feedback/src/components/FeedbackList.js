import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback }) => {
  return (
    <ul>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} feedback={feedback} />
      ))}
    </ul>
  )
}

export default FeedbackList

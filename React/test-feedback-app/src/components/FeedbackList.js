import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback, handleDelete }) => {
  return (
    <ul>
      {feedback.map((i) => (
        <FeedbackItem feedback={i} handleDelete={handleDelete} />
      ))}
    </ul>
  )
}

export default FeedbackList

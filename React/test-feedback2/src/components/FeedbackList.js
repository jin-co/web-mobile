import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback) {
    return <p>No feedback yet</p>
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem feedback={item} handleDelete={handleDelete} />
      ))}
    </div>
  )
}

export default FeedbackList

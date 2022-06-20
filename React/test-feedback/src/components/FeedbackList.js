import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback) {
    return <h1>No feedback yet</h1>
  }
  console.log(feedback)

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem item={item} handleDelete={handleDelete} />
      ))}
    </div>
  )
}

export default FeedbackList

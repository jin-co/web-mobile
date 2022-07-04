import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback, handleDelete }) => {
  return (
    <ul>
      {feedback.map((i) => (
        <li>
          <FeedbackItem key={i.id} feedback={i} handleDelete={handleDelete} />
        </li>
      ))}
    </ul>
  )
}

export default FeedbackList

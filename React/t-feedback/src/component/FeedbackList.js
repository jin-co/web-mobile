import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback }) => {
  return (
    <ul>
      {feedback.map((item) => (
        <li key={item.id}>
          <FeedbackItem feedback={item} />
        </li>
      ))}
    </ul>
  )
}

export default FeedbackList

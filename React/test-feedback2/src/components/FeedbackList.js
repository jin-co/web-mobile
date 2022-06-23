import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback, handelDelete }) => {
  return (
    <ul>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handelDelete={handelDelete} />
      ))}
    </ul>
  )
}

export default FeedbackList

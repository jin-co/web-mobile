import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback }) => {
  return (
    <>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </>
  )
}

export default FeedbackList

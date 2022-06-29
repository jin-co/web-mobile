import React from 'react'

const FeedbackItem = ({feedback}) => {
  return (
    <div>
      <p className='rating'> {feedback.rating} </p>
      <p> {feedback.text} </p>
    </div>
  )
}

export default FeedbackItem
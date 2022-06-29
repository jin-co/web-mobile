import React from 'react'
import Card from './shared/Card'

const FeedbackItem = ({ feedback }) => {
  return (
    <Card>
      <p className="rating"> {feedback.rating} </p>
      <p className='text-display'> {feedback.text} </p>
    </Card>
  )
}

export default FeedbackItem

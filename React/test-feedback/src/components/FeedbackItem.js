import React from 'react'
import Card from './shared/Card'

const FeedbackItem = ({ feedback }) => {
  return (
    <Card>
      <p> {feedback.rating} </p>
      <p> {feedback.text} </p>
    </Card>
  )
}

export default FeedbackItem

import React from 'react'
import Card from './shared/Card'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({feedback}) => {
  return (
    <Card>
      {feedback.map((data) => (
        <FeedbackItem entered={data} />        
      ))}
    </Card>
  )
}

export default FeedbackList

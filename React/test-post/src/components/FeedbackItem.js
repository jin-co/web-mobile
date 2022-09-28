import React from 'react'
import Card from '../layout/Card'

const FeedbackItem = ({ feed }) => {
  return (
    <Card>
      <p className=''>{feed.rating}</p>
      <p>{feed.text}</p>
    </Card>
  )
}

export default FeedbackItem

import React from 'react'
import Card from './shared/Card'

const FeedbackItem = ({ item }) => {
  return (
    <Card>
      <h4>{item.rating}</h4>
      <h4>{item.text}</h4>
    </Card>
  )
}

export default FeedbackItem

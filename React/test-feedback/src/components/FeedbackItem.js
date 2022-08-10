import React from 'react'
import Card from './shared/Card'

const FeedbackItem = ({ item }) => {
  return (
    <Card>
      <p> {item.text} </p>
      <p> {item.rating} </p>
    </Card>
  )
}

export default FeedbackItem

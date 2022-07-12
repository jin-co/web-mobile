import React from 'react'
import Card from './shared/Card'

const FeedbackItem = ({ item }) => {
  return (
    <Card>
      <p className='rating'>{item.rating}</p>
      <p>{item.text}</p>
    </Card>
  )
}

export default FeedbackItem

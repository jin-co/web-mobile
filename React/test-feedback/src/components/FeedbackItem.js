import React from 'react'
import Card from './shared/Card'

const FeedbackItem = ({item}) => {
  return (
    <Card>
    <p className='text-display'>{item.text}</p>
    <p className='rating-display'>{item.rating}</p>    
    </Card>
  )
}

export default FeedbackItem
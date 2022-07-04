import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'

const FeedbackItem = ({ feedback }) => {
  return (
    <Card>
      <p className='rating'>{feedback.rating}</p>
      
      <p className='text'>{feedback.text}</p>
    </Card>
  )
}

export default FeedbackItem

import React from 'react'
import { useState } from 'react'
import FeedbackItem from '../components/FeedbackItem'

const FeedbackList = ({feed}) => {  
  return (
    <div>
      {feed.map((f) => (
        <FeedbackItem key={f.id} feed={f} />
      ))}
    </div>
  )
}

export default FeedbackList

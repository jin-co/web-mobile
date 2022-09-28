import React from 'react'
import { useState } from 'react'
import FeedbackItem from '../components/FeedbackItem'

const FeedbackList = ({feed, handleDelete}) => {  
  return (
    <div>
      {feed.map((f) => (
        <FeedbackItem key={f.id} feed={f} handleDelete={handleDelete} />
      ))}
    </div>
  )
}

export default FeedbackList

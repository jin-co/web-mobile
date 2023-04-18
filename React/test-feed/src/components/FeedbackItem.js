import React from 'react'
import { useState } from 'react'

export const FeedbackItem = ({feed}) => {
  const [rating, setRating] = useState(7)

  return (
    <div className="card">    
      <div className="num-display">{feed.rating}</div>
      <div className="text-display">{feed.text}</div>
    </div>
  )
}

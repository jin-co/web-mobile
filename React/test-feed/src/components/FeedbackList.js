import React from 'react'
import { FeedbackItem } from './FeedbackItem'

export const FeedbackList = (props) => {
  return (
    <div className='feedback-list'>
      {
        props.feed.map(m => (
          <FeedbackItem feed={m} />
        ))
      }

    </div>
  )
}
import React from 'react'
import { FeedbackItem } from './FeedbackItem'

export const FeedbackList = (props) => {
  return (
    <div className='feedback-list'>
      {
        props.feed.map(m => (
          <FeedbackItem key={m.id} feed={m} />
        ))
      }

    </div>
  )
}
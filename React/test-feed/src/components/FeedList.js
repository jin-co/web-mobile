import React from 'react'
import { FeedItem } from './FeedItem'

export const FeedList = ({ feed }) => {
  return (
    <div className="feedback-list">
      {
        feed.map((f) => (
          <FeedItem feed={f} />
        ))
      }
    </div>
  )
}

import React from 'react'
import { FeedItem } from './FeedItem'

export const FeedList = ({ feed, deleteFeed }) => {
  return (
    <div className="feedback-list">
      {
        feed.map((f) => (
          <FeedItem deleteFeed={deleteFeed} feed={f} />
        ))
      }
    </div>
  )
}

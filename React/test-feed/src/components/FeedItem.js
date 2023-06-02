import React from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { Card } from './shared/Card'

export const FeedItem = ({ feed, deleteFeed }) => {
  return (
    <Card>
      <div className="num-display">{feed.rating}</div>
      <FaTimes
        color="red"
        className="close"
        onClick={() => { deleteFeed(feed.id) }}
      />
      <FaEdit
        color="blue"
        className="edit"
        onClick={() => { deleteFeed(feed.id) }}
      />
      <div className="text-display">{feed.text}</div>
      {/* <button onClick={onClick}>click</button> */}
    </Card>
  )
}

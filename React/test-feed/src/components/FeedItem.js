import React from 'react'
import { Card } from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'

export const FeedItem = ({ feed, handleDelete }) => {
  return (
    <Card>
      <div className="num-display">{feed.rating}</div>
      <FaTimes
        onClick={() => handleDelete(feed.id)}
        color="red"
        className="close"
      />
      <FaEdit
        className='edit'
        color='purple'

      />
      <div className="text-display">{feed.text}</div>
    </Card>
  )
}

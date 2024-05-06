import React from 'react'
import { Card } from '../shared/Card'
import { FaTimes } from 'react-icons/fa'

export const FeedItem = ({ item, deleteFeed }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <FaTimes
        color="red"
        className="close"
        onClick={() => deleteFeed(item.id)}
      />
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

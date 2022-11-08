import React from 'react'
import Card from '../Card'

const FeedItem = ({feed}) => {
  return (
    <Card>
      <p>{feed.text}</p>
      <p>{feed.rating}</p>
    </Card>
  )
}

export default FeedItem
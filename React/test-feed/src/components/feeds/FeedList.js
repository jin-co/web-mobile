import React from 'react'
import FeedItem from './FeedItem'

const FeedList = ({ feed }) => {
  return (
    <>
      {feed.map((f) => (
        <FeedItem key={f.id} feed={f} />
      ))}
    </>
  )
}

export default FeedList

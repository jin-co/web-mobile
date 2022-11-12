import React from 'react'
import FeedItem from './FeedItem'

const FeedList = ({ feed, handleDelete }) => {
  return (
    <>
      {feed.map((f) => (
        <FeedItem key={f.id} feed={f} handleDelete={handleDelete} />
      ))}
    </>
  )
}

export default FeedList

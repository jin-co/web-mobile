import React from 'react'
import FeedItem from './FeedItem'

const FeedList = ({ feed, handleDelete }) => {
  return (
    <>
      {feed.map((item) => (
        <FeedItem key={item.id} feed={item} handleDelete={handleDelete} />
      ))}
    </>
  )
}

export default FeedList

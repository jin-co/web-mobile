import React from 'react'
import Card from '../Card'
import { FaTimes, FaEdit } from 'react-icons/fa'

const FeedItem = ({ feed, handleDelete }) => {
  return (
    <Card>
      <p>{feed.text}</p>
      <FaTimes className="close" onClick={() => handleDelete(feed.id)} />
      <p>{feed.rating}</p>
      <FaEdit className="edit" />
    </Card>
  )
}

export default FeedItem

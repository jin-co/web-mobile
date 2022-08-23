import React from 'react'
import Card from './layout/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'

const FeedItem = ({ feed, handleDelete }) => {
  const cli = () => {
    console.log('hh')
  }

  return (
    <Card>
      <p>{feed.text}</p>
      <p>{feed.rating}</p>
      <FaTimes
        className="close"
        color="red"
        onClick={() => handleDelete(feed.id)}
      />
      <FaEdit className="edit" color="purple" />
    </Card>
  )
}

export default FeedItem

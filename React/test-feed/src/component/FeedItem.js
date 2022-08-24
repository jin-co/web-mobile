import React from 'react'
import Card from './layout/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedContext from '../context/FeedContext'

const FeedItem = ({ feed }) => {
  const { deleteFeed, fetchEditItem } = useContext(FeedContext)

  return (
    <Card>
      <p>{feed.text}</p>
      <p>{feed.rating}</p>
      <FaTimes
        className="close"
        color="red"
        onClick={() => deleteFeed(feed.id)}
      />
      <FaEdit className="edit" color="purple" onClick={() => fetchEditItem(feed)} />
    </Card>
  )
}

export default FeedItem

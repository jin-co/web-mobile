import React from 'react'
import Card from '../Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedContext from '../Context/FeedContext'

const FeedItem = ({ feed }) => {
  const { deleteFeed } = useContext(FeedContext)
  return (
    <Card>
      <p>{feed.text}</p>
      <FaTimes className="close" onClick={() => deleteFeed(feed.id)} />
      <p>{feed.rating}</p>
      <FaEdit className="edit" />
    </Card>
  )
}

export default FeedItem

import React from 'react'
import { useContext } from 'react'
import { Card } from './Shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedContext from '../context/FeedContext'

export const FeedbackItem = ({ feed }) => {
  const { deleteFeed, handleSetGetFeed } = useContext(FeedContext)
  return (
    <Card>
      <button className='close' onClick={() => deleteFeed(feed.id)}>
        <FaTimes />
      </button>
      <button className='edit' onClick={() => handleSetGetFeed(feed)}>
        <FaEdit />
      </button>
      <div className="num-display">{feed.rating}</div>
      <div className="text-display">{feed.text}</div>
    </Card>
  )
}

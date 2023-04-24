import React from 'react'
import { useState } from 'react'
import { Card } from './Shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'

export const FeedbackItem = ({ feed, deleteFeed }) => {  
  return (
    <Card>
      <button className='close' onClick={() => deleteFeed(feed.id)}>
        <FaTimes />
      </button>
      <button className='edit'>
        <FaEdit />
      </button>
      <div className="num-display">{feed.rating}</div>
      <div className="text-display">{feed.text}</div>
    </Card>
  )
}

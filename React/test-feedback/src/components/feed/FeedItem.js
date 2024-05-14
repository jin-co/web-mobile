import React, { useContext } from 'react'
import { Card } from '../shared/Card'
import { FaEdit, FaTimes } from 'react-icons/fa'
import FeedContext from '../../context/FeedContext'

export const FeedItem = ({ item }) => {
  const { deleteFeed, handleEditFeedSelected } = useContext(FeedContext)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <FaTimes
        color="red"
        className="close"
        onClick={() => deleteFeed(item.id)}
      />
      <FaEdit
        color='green'
        className='edit'
        onClick={() => handleEditFeedSelected(item)}
      />
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

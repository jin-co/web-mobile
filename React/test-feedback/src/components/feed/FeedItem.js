import React, { useContext } from 'react'
import { Card } from '../shared/Card'
import { FaTimes } from 'react-icons/fa'
import FeedContext from '../../context/FeedContext'

export const FeedItem = ({ item }) => {
  const { deleteFeed } = useContext(FeedContext)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <FaTimes
        color="red"
        className="close"
        onClick={() => deleteFeed(item.id)}
      />
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

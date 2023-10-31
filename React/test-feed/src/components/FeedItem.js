import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Card } from './shared/Card'
import FeedContext from '../context/FeedContext'

export const FeedItem = ({ feed }) => {
  const { deleteFeed } = useContext(FeedContext)
  return (
    <Card>
      <div className="num-display">{feed.rating}</div>
      <FaTimes
        color="red"
        className="close"
        onClick={() => deleteFeed(feed.id)}
      />
      <div className="text-display">{feed.text}</div>
      {/* <button onClick={onClick}>click</button> */}
    </Card>
  )
}

import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { Card } from './shared/Card'

export const FeedItem = ({feed}) => {
  return (
    <Card>
      <div className="num-display">{feed.rating}</div>
      <FaTimes
        color="red"
        className="close"
      />
      <div className="text-display">{feed.text}</div>
      {/* <button onClick={onClick}>click</button> */}
    </Card>
  )
}

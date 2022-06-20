import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'

const FeedbackItem = ({item}) => {
  const [] = useState()

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">
        {item.text}
      </div>
    </Card>
  )
}

export default FeedbackItem
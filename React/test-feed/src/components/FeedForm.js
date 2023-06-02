import React, { useState } from 'react'
import { RatingSelect } from './RatingSelect'
import { Card } from './shared/Card'
import { Button } from './shared/Button'
import { v4 as uuid } from 'uuid'

export const FeedForm = ({addFeed}) => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [isDisabled, setIsDisabled] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFeed = {
      id: uuid(),
      text,
      rating
    }
    addFeed(newFeed)    
  }

  const handleChange = (e) => {
    if (e.target.value.length > 10) {
      setIsDisabled(false)
    }
    console.log(e.target.value)
    setText(e.target.value)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect selectRating={(e) => setRating(e)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleChange}
          />
          <Button type="submit" isDisabled={isDisabled}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  )
}

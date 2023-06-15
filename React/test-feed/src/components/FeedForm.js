import React, { useState } from 'react'
import { Card } from './shared/Card'
import { Rating } from './Rating'
import { Button } from './shared/Button'
import { v4 as uuid } from 'uuid'

export const FeedForm = ({handleAdd}) => {
  const [isDisabled, setIsDisabled] = useState(true)
  const [text, setText] = useState('')
  const [rating, setRating] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFeed = {
      id: uuid(),
      text,
      rating
    }
    handleAdd(newFeed)
  }

  const handleChange = (e) => {
    if (e.target.value.length > 10) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
    setText(e.target.value)
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <Rating inputRating={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            value={text}
            placeholder="Write a review"
          />
          <Button type="submit" isDisabled={isDisabled}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  )
}

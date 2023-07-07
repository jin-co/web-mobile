import React, { useState } from 'react'
import { Card } from './shared/Card'
import { Button } from './shared/Button'
import { FeedRating } from './FeedRating'

export const FeedForm = ({ addFeed }) => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [isDisabled, setIsDisabled] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFeed = {
      text,
      rating
    }
    addFeed(newFeed)
  }

  const handleChange = (e) => {
    console.log(e.target.value.length > 10)
    if(e.target.value.length > 10) {
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
        <FeedRating select={(rating) => setRating(rating)}/>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
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

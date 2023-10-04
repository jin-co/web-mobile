import React, { useState } from 'react'
import { FeedRatingSelect } from './FeedRatingSelect'
import { Card } from './shared/Card'
import { Button } from './shared/Button'

export const FeedForm = () => {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const handleChange = (e) => {

  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Card>
      <form action="" onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <FeedRatingSelect />
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            value={text}
            placeholder="Write a review"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  )
}

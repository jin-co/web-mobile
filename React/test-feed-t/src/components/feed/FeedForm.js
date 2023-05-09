import React, { useState } from 'react'
import { Card } from '../shared/Card'
import { FeedRatingSelect } from './FeedRatingSelect'
import { Button } from '../shared/Button'

export const FeedForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(0)
  const [isDisabled, setIsDisabled] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    if (e.target.value.trim().length > 10) {
      setIsDisabled(false)
      setText(e.target.value)      
    } else {
      setIsDisabled(true)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <FeedRatingSelect inComingRating={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleChange}
          />
        </div>
        <Button isDisabled={isDisabled} type='submit'>Add</Button>
      </form>
    </Card>
  )
}

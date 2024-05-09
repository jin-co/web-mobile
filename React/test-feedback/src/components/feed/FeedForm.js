import React, { useState } from 'react'
import { FeedRating } from './FeedRating'
import { Button } from '../shared/Button'
import { Card } from '../shared/Card'
import { v4 as uuid } from 'uuid'

export const FeedForm = (props) => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(0)
  const [isDisabled, setIsDisabled] = useState(true)

  const handleSubmit = (e) => {
    console.log('ss')
    e.preventDefault()
    const newFeed = {
      id: uuid(),
      text,
      rating
    }
    props.addFeed(newFeed)
  }

  const handleChange = (e) => {
    setText(e.target.value)
    if (e.target.value.length > 10) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }

  const handleRating = (e) => {
    console.log(e)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} >
        <h2>How would you rate your service with us?</h2>
        <FeedRating setRating = {(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            value={text}
            placeholder="Write a review"
          />
          <Button type = 'submit' isDisabled={isDisabled} >
            Send
          </Button>
        </div>
        {/* {message && <div className="message">{message}</div>} */}
      </form>
    </Card>
  )
}

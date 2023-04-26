import React from 'react'
import { Card } from '../components/Shared/Card'
import { FeedbackRatingSelect } from '../components/FeedbackRatingSelect'
import { Button } from '../components/Shared/Button'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

export const FeedbackForm = ({ addFeed }) => {
  const [isDisabled, setIsDisabled] = useState(true)
  const [rating, setRating] = useState(10)
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let feed = {
      id: uuid(),
      rating,
      text
    }
    console.log(feed)
    addFeed(feed)    
  }

  const onInputChange = (e) => {
    if (e.target.value.length > 10) {
      setIsDisabled(false)      
    } else {
      setIsDisabled(true)
    }    
    console.log(e.target.value)
    setText(e.target.value)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <FeedbackRatingSelect changeRating={(r) => setRating(r)} />
        <div className="input-group">
          <input
            placeholder="Write a review"
            onChange={onInputChange}
          />
        </div>
        <Button type='submit' isDisabled={isDisabled}>Add</Button>
      </form>
    </Card>
  )
}

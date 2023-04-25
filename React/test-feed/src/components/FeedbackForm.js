import React from 'react'
import { Card } from '../components/Shared/Card'
import { FeedbackRatingSelect } from '../components/FeedbackRatingSelect'
import { Button } from '../components/Shared/Button'
import { useState } from 'react'

export const FeedbackForm = ({ addFeed }) => {
  const [isDisabled, setIsDisabled] = useState(true)
  const [rating, setRating] = useState(10)
  const [text, setText] = useState('')

  const handleSubmit = () => {
    let feed = {
      text: text,
      rating: rating
    }
    addFeed(feed)
  }

  const onInputChange = (e) => {
    if (e.target.value.length > 10) {
      setIsDisabled(false)
      setText(e.target.value)
    } else {
      setIsDisabled(true)
    }
    console.log(rating)    
  }

  return (
    <Card>
      <form action="" onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <FeedbackRatingSelect changeRating={(r) => setRating(r)} />
        <div className="input-group">
          <input
            placeholder="Write a review"
            onChange={onInputChange}
          />
        </div>
        <Button isDisabled={isDisabled}>Add</Button>
      </form>
    </Card>
  )
}

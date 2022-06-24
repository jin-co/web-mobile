import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

const FeedbackForm = ({handleAdd}) => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  const handelTextInput = (e) => {
    if (text === '') {
      setIsDisabled(true)
      setMessage(null)
    } else if (text.trim().length <= 10) {
      setIsDisabled(true)
      setMessage('invalid')
    } else {
      setIsDisabled(false)
      setMessage('')
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newRating = {
        text,
        rating,
      }      
      handleAdd(newRating)
    }
  }

  return (
    <Card>
      <form action="" onSubmit={handleSubmit}>
        <h2>How would you rate?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input type="text" placeholder="Write" onChange={handelTextInput} />
          <Button type="submit" isDisabled={isDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm

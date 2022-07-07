import React from 'react'
import Button from './shared/Button'
import Card from './shared/Card'
import { useState } from 'react'
import RatingSelect from './RatingSelect'
import {v4 as uuid} from 'uuid'

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState('')
  const [message, setMessage] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [rating, setRating] = useState(10)

  const handleInputChange = (e) => {
    console.log(e.target.value)
    if (+e.target.value.length < 10) {
      setMessage('over 10')
      setBtnDisabled(false)
    } else {
      setMessage('')
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFeed = {
      id: uuid(),
      text,
      rating
    }
    handleAdd(newFeed)
  }

  return (
    <Card>
      <form action="" onSubmit={handleSubmit}>
        <RatingSelect select={(rating) => setRating(rating)} />
        <input type="text" onChange={handleInputChange} />
        <Button type="submit" isDisabled={btnDisabled}>
          Add
        </Button>
      </form>
      {message}
    </Card>
  )
}

export default FeedbackForm

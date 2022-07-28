import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'
import SelectRating from './SelectRating'
import { v4 as uuid } from 'uuid'

const FeedbackForm = ({handleAdd}) => {
  const [text, setText] = useState('')
  const [message, setMessage] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const [rating, setRating] = useState(0)

  const handleChange = (e) => {
    if (e.target.value.length > 10) {
      setIsDisabled(false)
      setMessage('')
    } else {
      setIsDisabled(true)
      setText(e.target.value)
      setMessage('Over 10')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(rating)
    const newFeed = {
      id: uuid(),
      text,
      rating,
    }
    handleAdd(newFeed)
  }

  return (
    <Card>
      <SelectRating select={(rating) => setRating(rating)} />
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <Button type="submit" isDisabled={isDisabled}>
          Add
        </Button>
      </form>
      {message}
    </Card>
  )
}

export default FeedbackForm

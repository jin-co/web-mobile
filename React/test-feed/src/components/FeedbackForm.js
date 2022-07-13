import React from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)

  const handelInput = (e) => {
    if (+e.target.value.length > 10) {
      setBtnDisabled(false)
      setMessage('')      
      setMessage('over 10')
    }
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFeed = {
      id: uuid(),
      text,
      rating,
    }
    handleAdd(newFeed)
  }

  return (
    <Card>
      <form action="" onSubmit={handleSubmit}>
        <RatingSelect select={rating} />
        <input type="text" onChange={handelInput} />
        <Button isDisabled={btnDisabled}>Send</Button>
      </form>
      <p>{message}</p>
    </Card>
  )
}

export default FeedbackForm

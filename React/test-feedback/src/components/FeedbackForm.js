import React from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'

const FeedbackForm = ({ feedback, handleAdd }) => {
  const [text, setText] = useState('')
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(0)
  const [btnDisabled, setBtnDisabled] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFeed = {
      text,
      rating
    }
    handleAdd(newFeed)
  }

  const handleChange = (e) => {
    if(e.target.value.length < 10) {
      setMessage('more than 10 char')
      setBtnDisabled(true)
    } else {
      setMessage('')
      setBtnDisabled(false)
      setText(e.target.value)      
    }
  }

  return (
    <Card>
      <RatingSelect ratingSelected={(rating) => setRating(rating)} />
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <Button isDisabled={btnDisabled} type='submit'>Add</Button>
      </form>
      {message}
    </Card>
  )
}

export default FeedbackForm

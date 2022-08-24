import React from 'react'
import Card from './layout/Card'
import Button from './layout/Button'
import FeedSelect from './FeedSelect'
import { useState } from 'react'

const FeedForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)

  const handleSubmit = (e) => {
    if (text.length > 10) {
    } else {
      setMessage('Enter')
    }
  }

  const handleInput = (e) => {
    if (text.length > 10) {
      setMessage('')
      setBtnDisabled(false)
    } else {
      setBtnDisabled(true)
      setMessage('Enter')
    }
    setText(e.target.value)
  }

  return (
    <Card>
      <FeedSelect selected={(rating) => setRating(rating)} />
      <form action="">
        <input type="text" onChange={handleInput} value={text} />
        <Button>Add</Button>
      </form>
      {message}
    </Card>
  )
}

export default FeedForm

import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'
import SelectRating from './SelectRating'

const FeedbackForm = () => {
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
      setMessage('Over 10')
    }
  }

  return (
    <Card>
      <SelectRating />
      <form action="">
        <input type="text" onChange={handleChange} />
        <Button isDisabled={isDisabled}>Add</Button>
      </form>
      {message}
    </Card>
  )
}

export default FeedbackForm

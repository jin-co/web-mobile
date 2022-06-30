import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'

const FeedbackForm = ({ feedback }) => {
  const [text, setText] = useState('')
  const [message, setMessage] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)

  const handleChange = (e) => {
    setText(e.target.value)
    console.log(e.target.value.length)
    if (text === '') {
    } else if (e.target.value.length < 10) {
      setMessage('must be more than 10 characters')
    } else {
      setMessage('')
      setBtnDisabled(false)
    }
  }

  const handleSubmit = () => {}

  return (
    <Card>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="write a review"
            onChange={handleChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message}
      </form>
    </Card>
  )
}

export default FeedbackForm

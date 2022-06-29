import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'

const FeedbackForm = ({ feedback }) => {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)

  const handleSubmit = (e) => {
    setText(e.target.value)
  }

  return (
    <Card>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" placeholder="write a review" />
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm

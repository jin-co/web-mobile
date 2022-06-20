import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'

const FeedbackForm = () => {
  const [text, setText] = useState('')

  const handleTextChange = (e) => {
    setText(e.target.value)
    console.log(text)
  }

  return (
    <Card>
      <form action="">
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            value={text}
            placeholder="Write a review"
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm

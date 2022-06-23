import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')

  const handelTextInput = (e) => {
    
  }  

  return (
    <Card>
      <form action="">
        <h2>How would you rate?</h2>
        <div className="input-group">
          <input type="text" placeholder="Write" onChange={handelTextInput} />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm

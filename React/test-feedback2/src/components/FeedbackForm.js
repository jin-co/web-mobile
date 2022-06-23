import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  const handelTextInput = (e) => {
    if(text ==='') {
      setIsDisabled(true)
      setMessage(null)
    } else if(text.trim().length <= 10) {
      setIsDisabled(true)
      setMessage('invalid')
    } else {
      setIsDisabled(false)
      setMessage('')
    }

    setText(e.target.value)    
  }  

  return (
    <Card>
      <form action="">
        <h2>How would you rate?</h2>
        <div className="input-group">
          <input type="text" placeholder="Write" onChange={handelTextInput} />
          <Button type="submit" isDisabled={isDisabled}>Send</Button>
        </div>
        {message&&<div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm

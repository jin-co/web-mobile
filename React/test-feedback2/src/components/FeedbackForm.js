import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextInput = (e) => {
    setText(e.target.value)
    if (text === '') {
      setBtnDisabled(true)
      setMessage('')
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Over 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    console.log(text)
  }

  return (
    <Card>
      <form>
        <h2>Survey</h2>
        <div className="input-group">
          <input type="text" placeholder="Review" onChange={handleTextInput} />
          <Button isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm

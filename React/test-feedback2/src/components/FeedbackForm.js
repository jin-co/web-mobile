import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  // const [text, setText] = useState('')
  // const [text, setText] = useState('')

  const handleTextInput = (e) => {
    setText(e.target.value)
    console.log(text)
  }

  return (
    <Card>
      <form>
        <h2>Survey</h2>
        <div className="input-group">
          <input type="text" placeholder='Review' onChange={handleTextInput} />
          <Button>Send</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
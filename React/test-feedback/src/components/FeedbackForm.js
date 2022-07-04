import React from 'react'
import FeedbackSelect from './FeedbackSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'

const FeedbackForm = ({ feedback }) => {
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [text, setText] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {}

  const handleChange = (e) => {
    console.log(e.target.value)
    if (text === '') {
    } else if (+e.target.value.length < 10) {
      setMessage('Must be more than 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage('')
      setBtnDisabled(false)
    }
  }

  return (
    <Card>
      <FeedbackSelect />
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <Button>Save</Button>
        <p>{message}</p>
      </form>
    </Card>
  )
}

export default FeedbackForm

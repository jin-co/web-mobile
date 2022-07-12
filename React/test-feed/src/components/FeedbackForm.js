import React from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)

  const handelInput = (e) => {
    if (+e.target.value.length > 10) {
      setBtnDisabled(false)
      setMessage('')
    } else {
      setBtnDisabled(true)
      setMessage('over 10')
    }
    console.log(e.target.value)
  }

  return (
    <Card>
      <form action="">
        <RatingSelect select={rating}/>
        <input type="text" onChange={handelInput} />
        <Button isDisabled={btnDisabled}>Send</Button>
      </form>
      <p>{message}</p>
    </Card>
  )
}

export default FeedbackForm

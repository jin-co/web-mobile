import React from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'

const FeedbackForm = () => {
  const {addFeedback} = useContext(FeedbackContext)
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)

  const handelInput = (e) => {    
    if (+e.target.value.length > 10) {
      setBtnDisabled(false)
      setMessage('')      
      setMessage('over 10')      
    }
    setText(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFeed = {
      id: uuid(),
      text,
      rating,
    }
    addFeedback(newFeed)
    setText('')
  }

  return (
    <Card>
      <form action="" onSubmit={handleSubmit}>
        <RatingSelect select={(rating) => setRating(rating)} />
        <input type="text" onChange={handelInput} value={text} />
        <Button isDisabled={btnDisabled}>Send</Button>
      </form>
      <p>{message}</p>
    </Card>
  )
}

export default FeedbackForm

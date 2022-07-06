import React from 'react'
import FeedbackSelect from './FeedbackSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useContext, useEffect } from 'react'
import Context from '../context/Context'

const FeedbackForm = () => {
  const { feedback, addFeedback, feedbackEdit } = useContext(Context)
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')

  useEffect(() => {
    console.log('effect')
    if(feedbackEdit.edit) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newFeed = {
      id: uuid(),
      text,
      rating,
    }

    addFeedback(newFeed)
  }

  const handleChange = (e) => {
    console.log(e.target.value)

    if (e.target.value.length < 10) {
      console.log('less')
      setMessage('Must be more than 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage('')
      setBtnDisabled(false)
    }
    setText(e.target.value)

    // if (text === '') {
    // } else if (e.target.value.length < 10) {
    //   console.log('less')
    //   setMessage('Must be more than 10 characters')
    //   setBtnDisabled(true)
    // } else {
    //   setMessage('')
    //   setBtnDisabled(false)
    // }
  }

  return (
    <Card>
      <FeedbackSelect select={(rating) => setRating(rating)} />
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <Button isDisabled={btnDisabled}>Save</Button>
        <p>{message}</p>
      </form>
    </Card>
  )
}

export default FeedbackForm

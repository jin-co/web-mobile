import React from 'react'
import Button from './shared/Button'
import Card from './shared/Card'

import RatingSelect from './RatingSelect'
import { v4 as uuid } from 'uuid'
import { useState, useEffect, useContext } from 'react'
import Context from '../context/Context'

const FeedbackForm = () => {
  const { addFeedback, editFeedback, realUpdateFeed } = useContext(Context)

  const [text, setText] = useState('')
  const [message, setMessage] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [rating, setRating] = useState(10)

  useEffect(() => {
    console.log(editFeedback)
    if (editFeedback.isEdit === true) {
      setBtnDisabled(false)
      setText(editFeedback.newFeed.text)
      setRating(editFeedback.newFeed.rating)
    }
    console.log('hh')
  }, [editFeedback])

  const handleInputChange = (e) => {
    console.log(e.target.value)
    if (+e.target.value.length < 10) {
      setMessage('over 10')
      setBtnDisabled(false)
    } else {
      setMessage('')
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFeed = {
      id: uuid(),
      text,
      rating,
    }

    if (editFeedback.isEdit === true) {
      realUpdateFeed(editFeedback.newFeed.id, newFeed)
    } else {
      addFeedback(newFeed)
    }
  }

  return (
    <Card>
      <form action="" onSubmit={handleSubmit}>
        <RatingSelect select={(rating) => setRating(rating)} />
        <input type="text" onChange={handleInputChange} value={text} />
        <Button type="submit" isDisabled={btnDisabled}>
          Add
        </Button>
      </form>
      {message}
    </Card>
  )
}

export default FeedbackForm

import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import { useState, useEffect, useContext } from 'react'
import SelectRating from './SelectRating'
import { v4 as uuid } from 'uuid'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackForm = () => {
  const { addFeed, editMode, updateFeed } = useContext(FeedbackContext)
  const [text, setText] = useState('')
  const [message, setMessage] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const [rating, setRating] = useState(0)

  useEffect(() => {
    if (editMode.edit) {
      setRating(editMode.item.rating)
      setText(editMode.item.text)
    }
  }, [editMode])

  const handleChange = (e) => {
    if (e.target.value.length > 10) {
      setIsDisabled(false)
      setMessage('')
    } else {
      setIsDisabled(true)
      setText(e.target.value)
      setMessage('Over 10')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(rating)
    const newFeed = {
      id: uuid(),
      text,
      rating,
    }
    if(editMode.edit) {
      updateFeed(editMode.item.id, newFeed)
    } else {
      addFeed(newFeed)
    }
  }

  return (
    <Card>
      <SelectRating select={(rating) => setRating(rating)} />
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={text} />
        <Button type="submit" isDisabled={isDisabled}>
          Add
        </Button>
      </form>
      {message}
    </Card>
  )
}

export default FeedbackForm

import React from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import { useState, useContext, useEffect } from 'react'
import FeedContext from '../context/FeedContext'

const FeedbackForm = () => {
  const { addFeed, editMode, updateFeed} = useContext(FeedContext)

  const [text, setText] = useState('')
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(0)
  const [btnDisabled, setBtnDisabled] = useState(true)

  useEffect(() => {
    console.log('form useEffect: ', editMode)
    if (editMode.edit) {
      setText(editMode.item.text)
      setRating(editMode.item.rating)
    }
  }, [editMode])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFeed = {
      text,
      rating,
    }
    if(editMode.eidt) {
      updateFeed(editMode.item.id, newFeed)
    } else {
      addFeed(newFeed)
    }        
  }

  const handleChange = (e) => {
    if (e.target.value.length < 10) {
      setMessage('more than 10 char')
      setBtnDisabled(true)
    } else {
      setMessage('')
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  return (
    <Card>
      <RatingSelect ratingSelected={(rating) => setRating(rating)} />
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={text} />
        <Button isDisabled={btnDisabled} type="submit">
          Add
        </Button>
      </form>
      {message}
    </Card>
  )
}

export default FeedbackForm

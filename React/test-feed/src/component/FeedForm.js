import React from 'react'
import Card from './layout/Card'
import Button from './layout/Button'
import FeedSelect from './FeedSelect'
import { useState, useContext, useEffect } from 'react'
import FeedContext from '../context/FeedContext'

const FeedForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)

  const { addFeed, getEditItem, updateFeed } = useContext(FeedContext)

  useEffect(() => {
    if (getEditItem.edit) {
      setText(getEditItem.item.text)
      setRating(getEditItem.item.rating)
    }
  }, [getEditItem])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFeed = {
      text,
      rating,
    }

    if (getEditItem.edit) {
      updateFeed(getEditItem.item.id, newFeed)
    } else {
      addFeed(newFeed)
    }
    setText('')
  }

  const handleInput = (e) => {
    if (text.length > 10) {
      setMessage('')
      setBtnDisabled(false)
    } else {
      setBtnDisabled(true)
      setMessage('Enter')
    }
    setText(e.target.value)
  }

  return (
    <Card>
      <FeedSelect selected={(rating) => setRating(rating)} />
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={text} />
        <Button butDisabled={btnDisabled}>Add</Button>
      </form>
      {message}
    </Card>
  )
}

export default FeedForm

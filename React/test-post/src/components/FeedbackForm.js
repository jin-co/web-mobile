import React from 'react'
import Button from '../layout/Button'
import { useState } from 'react'
import { useContext, useEffect } from 'react'
import FeedContext from '../context/FeedContext'
import FeedRatings from './FeedRatings'

const FeedbackForm = () => {
  const { feed, addFeed, isEdit, editFeed } = useContext(FeedContext)
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)

  useEffect(() => {    
    if(isEdit.edit) {
      setBtnDisabled(false)
      setText(isEdit.item.text)
      setRating(isEdit.item.rating)
    }
  }, [isEdit])

  const onSubmit = (e) => {
    e.preventDefault()

    const newFeed = {
      rating,
      text,
    }
    addFeed(newFeed)
  }

  const onChange = (e) => {    
    if (e.target.value.length < 10) {
      setBtnDisabled(true)
      setMessage('enter more than 10')
    } else {
      setBtnDisabled(false)
      setMessage('')
    }
    setText(e.target.value)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <FeedRatings ratingInput={(rating) => setRating(rating)} />
        <input type="text" onChange={onChange} value={text} />
        <Button type="submit" isDisabled={btnDisabled} />
      </form>
      <p>{message}</p>
    </>
  )
}

export default FeedbackForm

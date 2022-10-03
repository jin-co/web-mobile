import React from 'react'
import Button from '../layout/Button'
import { useState } from 'react'
import { useContext } from 'react'
import FeedContext from '../context/FeedContext'

const FeedbackForm = () => {
  const { feed, addFeed } = useContext(FeedContext)

  const [text, setText] = useState('')
  const [rating, setRating] = useState('')
  const [message, setMessage] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)

  const onSubmit = (e) => {
    e.preventDefault()

    const newFeed = {      
      rating,
      text,
    }
    addFeed(newFeed)
  }

  const onChange = (e) => {
    console.log(e.target.value.length)
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
        <input type="text" onChange={onChange} value={text} />
        <Button type="submit" isDisabled={btnDisabled} />
      </form>
      <p>{message}</p>
    </>
  )
}

export default FeedbackForm

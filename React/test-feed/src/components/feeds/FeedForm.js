import React from 'react'
import RatingSelect from './RatingSelect'
import Card from '../Card'
import Button from '../Button'
import { useState } from 'react'

const FeedForm = ({ feed }) => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)

  const handleInput = (e) => {
    setText(e.target.value)        
    
    if (+e.target.value.trim().length < 10) {
      setBtnDisabled(true)
    } else {
      setBtnDisabled(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Card>
      <RatingSelect
        rating={(rating) => {
          setRating(rating)
        }}
      />

      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={text} />
        <Button type="submit" btnDisabled={btnDisabled}>
          Add
        </Button>
      </form>
    </Card>
  )
}

export default FeedForm

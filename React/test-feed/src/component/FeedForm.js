import React from 'react'
import Card from './layout/Card'
import Button from './layout/Button'
import FeedSelect from './FeedSelect'
import { useState } from 'react'

const FeedForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')
  const [btnEnabled, setBtnEnabled] = useState(true)

  return (
    <Card>
      <FeedSelect />
      <form action="">
        <input type="text" />
        <Button>Add</Button>
      </form>
    </Card>
  )
}

export default FeedForm

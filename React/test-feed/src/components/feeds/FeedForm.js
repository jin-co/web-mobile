import React from 'react'
import RatingSelect from './RatingSelect'
import Card from '../Card'
import Button from '../Button'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useContext, useEffect } from 'react'
import FeedContext from '../Context/FeedContext'

const FeedForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)

  const { feed, addFeed, isEdit, updateFeed } = useContext(FeedContext)

  useEffect(() => {
    if(isEdit.editOn) {      
      setText(isEdit.feed.text)
      setRating(isEdit.feed.rating)
      console.log(isEdit.feed)
    }
  }, [isEdit])

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
    let newFeed    

    if(isEdit.editOn) {
      newFeed = {                
        text,
        rating,
      }
      updateFeed(newFeed, isEdit.feed.id)
    } else {
      newFeed = {
        id: uuid(),
        text,
        rating,
      }

      addFeed(newFeed)
    }        
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

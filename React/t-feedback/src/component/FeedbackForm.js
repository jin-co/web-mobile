import React from 'react'
import Button from './shared/Button'
import Card from './shared/Card'
import { useState } from 'react'
import RatingSelect from './RatingSelect'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [message, setMessage] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [select, setSelect] = useState(10)

  const handleInputChange = (e) => {
    console.log(e.target.value)
    if(+e.target.value.length < 10) {
      setMessage('over 10')
      setBtnDisabled(false)
    } else {
      setMessage('')
      setBtnDisabled(false)
    }
    
  }

  return (
    <Card>
      <form action="">
        <RatingSelect select={select} />
        <input type="text" onChange={handleInputChange} />
        <Button isDisabled={btnDisabled} >Add</Button>
      </form>
      {message}
    </Card>
  )
}

export default FeedbackForm

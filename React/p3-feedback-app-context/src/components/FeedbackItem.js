import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({ item }) => {  
  // const [] = useState()  
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  // const [rating, setRating] = useState(7)
  // const onClick = () => {
  //   setRating(8)

  //   // setRating((prev) => {
  //   //   return prev + 1
  //   // })
  // }

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <FaTimes
        onClick={() => deleteFeedback(item.id)}
        color="red"
        className="close"
      />
      <FaEdit 
        className='edit'
        color='purple'
        onClick={() => editFeedback(item)}
      />
      <div className="text-display">{item.text}</div>
      {/* <button onClick={onClick}>click</button> */}
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem

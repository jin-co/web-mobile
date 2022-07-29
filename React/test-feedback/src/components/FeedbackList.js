import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import { AnimatePresence as Animate, motion } from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'

const FeedbackList = () => {
  const {feedback} = useContext(FeedbackContext)
  return (
    <>
    <Animate>
        {feedback.map((item) => (
          <motion.div key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}              
            />
          </motion.div>
        ))}
    </Animate>
      </>
  )
}

export default FeedbackList

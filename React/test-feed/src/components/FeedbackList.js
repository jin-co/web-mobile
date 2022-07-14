import React from 'react'
import FeedbackItem from './FeedbackItem'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext)
  return (
    <>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  )
}

export default FeedbackList

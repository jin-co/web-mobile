import React from 'react'
import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'

const FeedbackList = ({ feedback, handelDelete }) => {
  return (
    <div>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handelDelete={handelDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList

import React from 'react'
import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'

const FeedbackList = ({ feedback, handleDelete }) => {
  return (
    <ul>
    <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <li key={item.id}>
              <FeedbackItem feedback={item} handleDelete={handleDelete} />
            </li>
          </motion.div>
        ))}
    </AnimatePresence>
      </ul>
  )
}

export default FeedbackList

import React from 'react'
import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import Context from '../context/Context'

const FeedbackList = ({ handleDelete }) => {
  const {feedback} = useContext(Context)

  return (
    <ul>
      <AnimatePresence>
        {feedback.map((i) => (
          <motion.div
            key={i.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem feedback={i} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </ul>
  )
}

export default FeedbackList

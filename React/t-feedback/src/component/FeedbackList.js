import React from 'react'
import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import Context from '../context/Context'
import { useContext } from 'react'

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(Context)

  return isLoading ? (
    <h3>Loaind...</h3>
  ) : (
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
              <FeedbackItem feedback={item} />
            </li>
          </motion.div>
        ))}
      </AnimatePresence>
    </ul>
  )
}

export default FeedbackList

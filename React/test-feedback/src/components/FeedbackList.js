import React from 'react'
import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import Context from '../context/Context'
import TContext from '../context/TContext'

const FeedbackList = ({ handleDelete }) => {
  const {feedback} = useContext(TContext)
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
            <li>
              <FeedbackItem
                key={i.id}
                feedback={i}
                handleDelete={handleDelete}
              />
            </li>
          </motion.div>
        ))}
      </AnimatePresence>
    </ul>
  )
}

export default FeedbackList

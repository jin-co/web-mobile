import React from 'react'
import FeedbackItem from './FeedbackItem'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import FeedContext from '../context/FeedContext'

const FeedbackList = () => {
  const {feedback} = useContext(FeedContext)
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
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList

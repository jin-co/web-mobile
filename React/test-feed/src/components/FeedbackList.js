import React from 'react'
import { FeedbackItem } from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'

export const FeedbackList = (props) => {
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {
          props.feed.map(m => (
            <motion.div key={m.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <FeedbackItem key={m.id} feed={m} deleteFeed={props.deleteFeed} />
            </motion.div>
          ))
        }
      </AnimatePresence>

    </div>
  )
}
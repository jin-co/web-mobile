import React from 'react'
import { FeedbackItem } from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedContext from '../context/FeedContext'

export const FeedbackList = () => {
  const { feed } = useContext(FeedContext)
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {
          feed.map(m => (
            <motion.div key={m.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <FeedbackItem key={m.id} feed={m} />
            </motion.div>
          ))
        }
      </AnimatePresence>

    </div>
  )
}
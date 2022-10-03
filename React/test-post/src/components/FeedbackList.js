import React from 'react'
import { useState, useContext } from 'react'
import FeedbackItem from '../components/FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import FeedContext from '../context/FeedContext'

const FeedbackList = ({ feed }) => {
  const { feed } = useContext(FeedContext)
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feed.map((f) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={f.id} feed={f} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList

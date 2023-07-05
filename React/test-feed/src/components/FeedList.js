import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FeedItem } from './FeedItem'

export const FeedList = ({ feed }) => {
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {
          feed.map(f => (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <FeedItem item={f} />
            </motion.div>
          ))
        }
      </AnimatePresence>
    </div>
  )
}

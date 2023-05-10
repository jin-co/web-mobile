import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FeedItem } from './FeedItem'

export const FeedList = ({ feed, deleteFeed }) => {
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {
          feed.map(f => (
            <motion.div key={f.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <FeedItem feed={f} deleteFeed={deleteFeed} />
            </motion.div>
          ))
        }
      </AnimatePresence>
    </div>
  )
}

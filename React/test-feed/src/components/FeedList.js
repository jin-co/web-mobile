import React from 'react'
import { FeedItem } from './FeedItem'
import { AnimatePresence, motion } from 'framer-motion'

export const FeedList = ({ feed }) => {
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {
          feed.map(f => (
            <motion.div key={f.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <FeedItem feed={f} />
            </motion.div>
          ))
        }
      </AnimatePresence>
    </div>
  )
}

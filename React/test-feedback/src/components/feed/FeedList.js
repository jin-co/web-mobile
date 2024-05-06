import React from 'react'
import { FeedItem } from './FeedItem'
import { motion, AnimatePresence } from 'framer-motion'

export const FeedList = ({ feed, deleteFeed }) => {
  if (!feed) {
    return <h1>Nothing</h1>
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feed.map((item) => (
          <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <FeedItem item={item} deleteFeed={deleteFeed} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>

  )
}

import React from 'react'
import { FeedItem } from './FeedItem'
import { motion, AnimatePresence } from 'framer-motion'

export const FeedList = ({ feed }) => {
  if (!feed) {
    return <h1>Nothing</h1>
  }
  console.log(feed)
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feed.map((item) => (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <FeedItem feed={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>

  )
}

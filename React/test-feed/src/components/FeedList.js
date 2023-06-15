import React from 'react'
import { FeedItem } from './FeedItem'
import { AnimatePresence, motion } from 'framer-motion'

export const FeedList = ({ feed, handleDelete }) => {
  return (
    <div>
      <AnimatePresence>
        {
          feed.map(f => (
            <motion.div key={f.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <FeedItem feed={f} handleDelete={handleDelete} />
            </motion.div>
          ))
        }
      </AnimatePresence>
    </div>
  )
}

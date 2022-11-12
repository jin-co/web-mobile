import React from 'react'
import FeedItem from './FeedItem'
import { motion, AnimatePresence } from 'framer-motion'

const FeedList = ({ feed, handleDelete }) => {
  return (
    <>
      <AnimatePresence>
        {feed.map((f) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedItem key={f.id} feed={f} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  )
}

export default FeedList

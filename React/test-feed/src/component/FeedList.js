import React from 'react'
import FeedItem from './FeedItem'
import { AnimatePresence, motion } from 'framer-motion'

const FeedList = ({ feed, handleDelete }) => {
  return (
    <>
      <AnimatePresence>
        {feed.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedItem key={item.id} feed={item} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  )
}

export default FeedList

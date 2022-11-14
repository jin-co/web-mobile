import React from 'react'
import FeedItem from './FeedItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedContext from '../Context/FeedContext'

const FeedList = () => {
  const { feed } = useContext(FeedContext)
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
            <FeedItem key={f.id} feed={f} />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  )
}

export default FeedList

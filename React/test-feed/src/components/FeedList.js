import React, { useContext } from 'react'
import { FeedItem } from './FeedItem'
import { AnimatePresence, motion } from 'framer-motion'
import FeedContext from '../context/FeedContext'

export const FeedList = () => {
  const { feed } = useContext(FeedContext)
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {
          feed.map((f) => (
            <motion.div key={f.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <FeedItem feed={f} />
            </motion.div>
          ))
        }
      </AnimatePresence>
    </div>
  )
}

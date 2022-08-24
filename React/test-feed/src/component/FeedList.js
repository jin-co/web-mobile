import React from 'react'
import FeedItem from './FeedItem'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import FeedContext from '../context/FeedContext'

const FeedList = () => {
  const { feed } = useContext(FeedContext)

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
            <FeedItem key={item.id} feed={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  )
}

export default FeedList

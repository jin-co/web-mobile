import { useContext } from 'react'
import { FeedItem } from './FeedItem'
import { AnimatePresence, motion } from 'framer-motion'
import FeedContext from '../context/FeedContext'

export const FeedList = () => {
  const { feed, handleDelete } = useContext(FeedContext)
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

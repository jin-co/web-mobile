import { useContext } from 'react'
import { NoteItem } from './NoteItem'
import NoteContext from '../context/NoteContext'
import { AnimatePresence, motion } from 'framer-motion'

export const Note = () => {
  const { note } = useContext(NoteContext)
  return (
    <div className='notes'>
      <AnimatePresence>
        {
          note.map(n => (
            <motion.div key={n.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <NoteItem note={n} />
            </motion.div>
          ))
        }
      </AnimatePresence>
    </div>
  )
}

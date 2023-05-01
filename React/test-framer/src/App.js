import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

var items = [
  { id: 1, name: 'pencil' },
  { id: 2, name: 'eraser' },
  { id: 3, name: 'brush' },
]

export const App = () => {
  const [list, setList] = useState(items)
  const handleDelete = (id) => {
    setList(
      list.filter(i => i.id !== id)
    )
  }

  return (
    <div>
      <ul>
        <AnimatePresence>
          {
            list.map((i, idx) => (
              <motion.div key={i.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <li key={i.id}>
                  <i onClick={() => handleDelete(i.id)}>❌</i>
                  {i.name}
                </li>
              </motion.div>
            ))
          }
        </AnimatePresence>
      </ul>
    </div>
  )
}

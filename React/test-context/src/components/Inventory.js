import React from 'react'
import { useContext } from 'react'
import InventoryContext from '../context/InventoryContext'
import { InventoryItem } from './InventoryItem'

const Inventory = () => {
  const { inventory } = useContext(InventoryContext)

  return (
    <div>
      {
        inventory.map(i => (
          <InventoryItem key={i.id} inventory={i} />
        ))
      }
    </div>
  )
}

export default Inventory
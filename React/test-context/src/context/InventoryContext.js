import { createContext, useState } from 'react'
import InventoryData from '../data/InventoryData'

const InventoryContext = createContext()

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState(InventoryData)
  return (
    <InventoryContext.Provider value={{
      inventory
    }}>
      {children}
    </InventoryContext.Provider>
  )
}

export default InventoryContext
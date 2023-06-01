import { createContext, useReducer, useEffect } from 'react'
import InventoryData from '../data/InventoryData'
import { InventoryReducer } from './InventoryReducer'

const InventoryContext = createContext()

export const InventoryProvider = ({ children }) => {  
  const initialState = {
    inventory: InventoryData
  }

  const [state, dispatch] = useReducer(InventoryReducer, initialState)

  return (
    <InventoryContext.Provider value={{
      ...state
    }}>
      {children}
    </InventoryContext.Provider>
  )
}

export default InventoryContext
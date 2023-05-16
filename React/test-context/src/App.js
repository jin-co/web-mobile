import React from 'react'
import { Home } from './components/Home'
import { InventoryProvider } from './context/InventoryContext'

export const App = () => {
  return (
    <InventoryProvider>
      <div>
        <Home />
      </div>
    </InventoryProvider>
  )
}

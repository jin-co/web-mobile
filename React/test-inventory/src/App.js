import React from 'react'
import { InventoryProvider } from './context/InventoryContext'
import { Home } from './components/Home'

export const App = () => {
  return (
    <InventoryProvider>
      <div>
        <Home />
      </div>
    </InventoryProvider>
  )
}

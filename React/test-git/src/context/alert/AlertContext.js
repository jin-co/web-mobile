import React from 'react'
import { createContext } from 'react'

const AlertContext = createContext()

export const AlertProvider = (props) => {
  return (
    <AlertContext.Provider value={{}}>{props.children}</AlertContext.Provider>
  )
}

export default AlertContext

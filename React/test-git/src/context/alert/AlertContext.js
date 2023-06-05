import React, { createContext, useReducer } from 'react'
import { AlertReducer } from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  const initialState = {
    alert: false
  }

  const [state, dispatch] = useReducer(AlertReducer, initialState)
  return (
    <AlertContext.Provider value={{
      ...state,
      alertDispatch: dispatch
    }}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContext
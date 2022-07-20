import React from 'react'
import { createContext, useReducer } from 'react'
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = (props) => {
  const initialState = null

  const [state, dispatch] = useReducer(alertReducer, initialState)

  return (
    <AlertContext.Provider value={{
      alert:state
    }}>
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertContext
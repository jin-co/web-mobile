import React, { createContext, useReducer } from 'react'
import { AlertReducer } from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  const initial = {
    isOpen: false
  }

  const [state, dispatch] = useReducer(AlertReducer, initial)

  const setAlert = () => {
    dispatch({
      type: 'OPEN_ALERT'
    })

    setTimeout(() => {
      dispatch({
        type: 'CLOSE_ALERT'
      })
    }, 1000)
  }

  return (
    <AlertContext.Provider value={{
      ...state,
      setAlert
    }}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContext

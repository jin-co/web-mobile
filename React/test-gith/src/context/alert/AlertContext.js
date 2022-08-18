import React from 'react'
import { createContext, useReducer } from 'react'
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = (props) => {
  const initial = null

  const [state, dispatch] = useReducer(alertReducer, initial)

  const setAlert = (msg, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: {
        msg,
        type,
      },
    })

    setTimeout(() => {
      dispatch({
        type: 'CLEAR_ALERT',
      })
    }, 2000)
  }

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertContext

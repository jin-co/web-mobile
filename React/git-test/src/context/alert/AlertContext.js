import React from 'react'
import { createContext, useReducer } from 'react'
import AlertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = (props) => {
  const initial = null
  const [state, dispatch] = useReducer(AlertReducer, initial)

  const showAlert = (msg) => {
    dispatch({
      type: 'SHOW_ALERT',
      payload: {
        show: true,
        msg: msg
      },
    })

    setTimeout(() => {
      dispatch({
        type: 'HIDE_ALERT'        
      })
    }, 3000)
  }

  return (
    <AlertContext.Provider value={{ showAlert, alert: state }}>
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertContext

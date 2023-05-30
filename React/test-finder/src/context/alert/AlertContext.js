import React, { createContext, useState } from 'react'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false)

  const toggleAlert = () => {
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 1000)    
  }

  return (
    <AlertContext.Provider value={{
      alert,
      toggleAlert
    }}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContext

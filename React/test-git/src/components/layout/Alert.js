import React, { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

export const Alert = () => {
  const { isOpen } = useContext(AlertContext)

  if(isOpen) {
    return (
      <div>Alert</div>
    )
  }  
}

import React from 'react'
import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

const Alert = () => {
  const { alert } = useContext(AlertContext)
  return alert !== null && <div>{alert.msg}</div>
}

export default Alert

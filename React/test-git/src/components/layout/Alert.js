import React from 'react'
import { useContext } from 'react'
import AlertContext from '../../context/AlertContext'

const Alert = () => {
  const { alert } = useContext(AlertContext)

  return (
    alert !== null && (
      <div className="text-light">
        <p>{alert.type === 'error' && <small>error</small>}</p>
        <p>{alert.msg}</p>
      </div>
    )
  )
}

export default Alert

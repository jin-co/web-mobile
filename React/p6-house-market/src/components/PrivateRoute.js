import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'

const PrivateRoute = () => {
  const { logged, statusCheck } = useAuthStatus()

  if (statusCheck) {
    return <h3>spinner</h3>
  }

  return logged ? <Outlet /> : <Navigate to="/sign-in" />
}

export default PrivateRoute

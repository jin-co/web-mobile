import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
import Spinner from './Spinner'

const PrivateRoute = () => {
  const { logged, statusCheck } = useAuthStatus()

  if (statusCheck) {
    return <Spinner />
  }

  return logged ? <Outlet /> : <Navigate to="/sign-in" />
}

export default PrivateRoute

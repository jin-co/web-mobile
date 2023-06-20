import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Spinner } from './Spinner'

export const PrivateRoute = () => {
  const { isLoggedIn, checkingStatus } = useAuth()
  if (checkingStatus) {
    return <Spinner />
  }

  return isLoggedIn ? <Outlet /> : <Navigate to={'/login'} />
}

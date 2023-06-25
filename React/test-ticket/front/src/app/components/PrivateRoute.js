import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { Spinner } from './Spinner'
import { useAuth } from '../hooks/useAuth'

export const PrivateRoute = () => {
  const { isLoading, isLogged } = useAuth()

  if (isLoading) {
    return <Spinner />
  }

  return (
    isLogged ? <Outlet /> : <Navigate to={'/login'} />
  )
}

import { getAuth } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate, Navigate, Outlet } from 'react-router-dom'
import { Spinner } from './Spinner'
import { useAuthStatus } from '../hooks/useAuthStatus'

export const PrivateRoute = () => {
  const { isLogged, isLoading } = useAuthStatus()

  let flag = isLogged
  // if (isLoading) return <Spinner />
  // if (!flag) {
  //   return <Navigate to={'/login'} />
  // }
  return isLoading ? <Spinner /> : flag ? <Outlet /> : <Navigate to={'/login'} />
}

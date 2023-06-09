import { Navigate, Outlet } from "react-router-dom"
import { useAuthStatus } from "../hooks/useAuthStatus"
import { Spinner } from './Spinner'
import { useEffect } from 'react'
export const PrivateRoute = () => {
  const { isLogged, loading } = useAuthStatus()
  if (loading) {
    return <Spinner />
  }  
  return isLogged ? <Outlet /> : <Navigate to='/login ' />
}

import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Spinner } from './Spinner'
import { Navigate, Outlet } from "react-router-dom"
import { useAuthStatus } from "../hooks/useAuthStatus"

export const PrivateRoute = () => {
  const { loggedIn, loading } = useAuthStatus()

  if (loading) return <Spinner />
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />
}

import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Spinner } from './Spinner'
import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
      }
      setLoading(false)
    })
  }, [])

  if (loading) return <Spinner />
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />
}

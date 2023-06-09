import { Navigate, Outlet } from "react-router-dom"
import { useAuthStatus } from "../hooks/useAuthStatus"

export const PrivateRoute = () => {  
  const { isLogged, loading } = useAuthStatus()
  return isLogged ? <Outlet /> : <Navigate to='/login ' />
}

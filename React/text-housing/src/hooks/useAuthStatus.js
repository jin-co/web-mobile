import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"


export const useAuthStatus = () => {
  const [isLogged, setIsLogged] = useState(false)
  const [loading, setLoading] = useState(true)
  const auth = getAuth()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true)
        setLoading(false)
      }
    })
  }, [])
  return (
    { isLogged, loading }
  )
}
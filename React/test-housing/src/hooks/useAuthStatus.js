import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const useAuthStatus = () => {
  const [isLogged, setIsLogged] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setIsLogged(true)
        setIsLoading(false)
      }
      console.log(user)    
    })
  }, [])

  return {isLogged, isLoading}
}

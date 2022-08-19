import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const useAuthStatus = () => {
  const [logged, setLogged] = useState(false)
  const [statusCheck, setStatusCheck] = useState(true)
  const isMounted = useRef(true)

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLogged(true)
        }
        setStatusCheck(false)
      })
    }
    return () => {
      isMounted.current = false
    }
  }, [isMounted])

  return { logged, statusCheck }
}

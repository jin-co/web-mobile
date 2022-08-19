import React from 'react'
import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const useAuthStatus = () => {
  const [logged, setLogged] = useState(false)
  const [statusCheck, setStatusCheck] = useState(true)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogged(true)
        setStatusCheck(false)
      }
    })
  }, [])

  return { logged, statusCheck }
}


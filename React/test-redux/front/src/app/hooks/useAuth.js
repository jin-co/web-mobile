import React, { useEffect, useState } from 'react'

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      setIsLogged(true)
    }, 1000)
  }, [])

  return {isLoading, isLogged}
}

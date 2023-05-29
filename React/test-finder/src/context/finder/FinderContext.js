import React, { createContext } from 'react'
import { useEffect } from 'react'

const GITHUB_URL = 'https://api.github.com/'

const FinderContext = createContext()

export const FinderProvider = ({ chidren }) => {
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await fetch(GITHUB_URL)
    const data = await res.json()
    console.log(data)
  }
  return (
    <FinderContext.Provider value={{

    }}>
      {chidren}
    </FinderContext.Provider>
  )
}

export default FinderContext

import React from 'react'
import { useState, useEffect } from 'react'

const useFetch = (url, options) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options)
        const data = await res.json()
        setData(data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])
  return {
    data,
    loading,
    error,
  }
}

export default useFetch

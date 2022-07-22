import React from 'react'
import { useState } from 'react'

const useLocalStroage = (key, initialValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  )
  const setValue = (v) => {
    const valueToStore = v instanceof Function ? v(localStorageValue) : v
    setLocalStorageValue(v)
    localStorage.setItem(key, JSON.stringify(valueToStore))
  }
  return [localStorageValue, setValue]
}

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key)
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}

export default useLocalStroage

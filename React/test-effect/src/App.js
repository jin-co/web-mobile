import React, { useEffect } from 'react'

export const App = () => {
  useEffect(() => {
    console.log('loop')
  }, [])
  
  return (
    <div>App</div>
  )
}

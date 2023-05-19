import React, { createContext, useState } from 'react'

const EffectContext = createContext()

export const EffectProvider = ({ children }) => {
  const [effect, setEffect] = useState({
    id: 0,
    status: ''
  })

  return (
    <EffectContext.Provider value={{
      effect,
      setEffect
    }}>
      {children}
    </EffectContext.Provider>
  )
}

export default EffectContext;

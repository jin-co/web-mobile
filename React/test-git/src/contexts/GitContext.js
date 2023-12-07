import React, { createContext } from 'react'

const GitContext = createContext()

export const GitContextProvider = (props) => {

  return (
    <GitContext.Provider value={{

    }}>
      {props.children}
    </GitContext.Provider>
  )
}

export default GitContext
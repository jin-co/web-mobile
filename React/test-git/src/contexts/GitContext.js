import React, { createContext } from 'react'

const GitContext = createContext()
const GITHUB_URL = 'https://api.github.com/'

export const GitContextProvider = (props) => {

  return (
    <GitContext.Provider value={{

    }}>
      {props.children}
    </GitContext.Provider>
  )
}

export default GitContext
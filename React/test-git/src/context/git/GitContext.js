import { createContext, useReducer, useState } from "react"
import { GitReducer } from "./GitReducer"

const GitContext = createContext()

export const GitProvider = ({ children }) => {
  const initial = {
    users: [],
    user: {},
    repos: [],
    isLoading: false
  }

  const [state, dispatch] = useReducer(GitReducer, initial)

  return (
    <GitContext.Provider value={{
      ...state,
      dispatch
    }}>
      {children}
    </GitContext.Provider>
  )
}

export default GitContext
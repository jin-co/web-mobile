import React, { createContext, useEffect, useState, useReducer } from 'react'
import { UserReducer } from './UserReducer'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false
  }

  const [state, dispatch] = useReducer(UserReducer, initialState)  

  return (
    <UserContext.Provider value={{
      ...state,
      dispatch
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext

import React from 'react'

export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true
      }
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        isLoading: false
      }
    case 'GET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'GET_REPOS':
      return {
        ...state,
        repos: action.payload
      }
    case 'CLEAR_USERS':
      return {
        ...state,
        users: []
      }

    default:
      return state
  }
}





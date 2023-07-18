import React from 'react'

export const GitReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        isLoading: false
      }

    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        isLoading: false
      }

    case 'GET_REPOS':
      return {
        ...state,
        repos: action.payload,
        isLoading: false
      }

    default:
      return state
  }
}

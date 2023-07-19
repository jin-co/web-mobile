import React from 'react'

export const GitReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        isLoading: false
      }

    case 'GET_THEM':
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        isLoading: false
      }

    case 'LOAD':
      return {
        ...state,
        isLoading: true
      }

    case 'CLEAR':
      return {
        ...state,
        users: [],
      }

    default:
      return state
  }
}

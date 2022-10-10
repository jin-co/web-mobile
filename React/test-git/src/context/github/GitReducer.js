import React from 'react'

const GitReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      }

    case 'SEARCH_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
      }

    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }

    case 'GET_REPOS':
      return {
        ...state,
        repos: action.payload,
        loading: false,
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

export default GitReducer

import React from 'react'

const GitReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      }

    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
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
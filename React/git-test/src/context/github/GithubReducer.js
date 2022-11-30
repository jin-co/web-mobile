import React from 'react'

const GithubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      }

    case 'GET_USER':
      return {
        ...state,
        users: action.payload,
        loading: false,
      }

    case 'GET_REPOS':
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

    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
        loading: true,
      }

    default:
      return state
  }
}

export default GithubReducer

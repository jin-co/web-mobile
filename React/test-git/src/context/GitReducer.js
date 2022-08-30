import React from 'react'

const gitReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
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

    case 'CLEAR_USER':
      return {
        ...state,
        users: [],
        loading: false,
      }
    default:
      return state
  }
}

export default gitReducer

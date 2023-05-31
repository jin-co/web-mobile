import React from 'react'

export const Reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        users: action.payload
      }

    default:
      return state
  }
}

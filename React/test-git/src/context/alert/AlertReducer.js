import React from 'react'

export const AlertReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return {
        ...state,
        alert: true
      }

    case 'CLEAR':
      return {
        ...state,
        alert: false
      }

    default:
      return state
  }
}
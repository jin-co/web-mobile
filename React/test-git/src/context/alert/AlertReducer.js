import React from 'react'

export const AlertReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_ALERT':
      return {
        ...state,
        isOpen: true
      }

    case 'CLOSE_ALERT':
      return {
        ...state,
        isOpen: false
      }

    default:
      return state
  }
}

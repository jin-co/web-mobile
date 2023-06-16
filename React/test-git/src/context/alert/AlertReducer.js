import React from 'react'

export const AlertReducer = (state, action) => {
  switch (action.type) {
    case 'ON':
      return {
        ...state,
        isOn: true
      }
    case 'OFF':
      return {
        ...state,
        isOn: false
      }

    default:
      return state
  }
}
